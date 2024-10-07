import { validateUser } from "../../utils/validateUser.js";
import { connection } from "../server.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const saltRounds = 10;

class UsersControllers {
    async showAllUsers(req, res) {
        try {
            const sql = "SELECT * FROM users";
            const [results] = await connection.query(sql);
            return res.status(200).json(results);
        } catch (err) {
            return res.status(500).json({ error: 'Server error' });
        }
    }

    async showUserById(req, res) {
        try {
            const { id } = req.params;
            const sql = "SELECT * FROM users WHERE id = ?";
            const [results] = await connection.query(sql, id, `Id '${id}' not found`);
            if (results.length < 1) {
                return res.status(404).json({ error: "User not found" })
            } 
            return res.status(200).json(results[0]);
        } catch (err) {
            return res.status(404).json({ error: err });
        }
    }

    async register(req, res) {
        try {
            const {username, email, password} = req.body;

            const dataValidated = validateUser({username, email});
            if (!dataValidated.isValid) {
                return res.status(403).json({ error: dataValidated.alertMessage });
            }
            
            const selectSql = `SELECT * FROM users WHERE username = ?`;
            const [selectResults] = await connection.query(selectSql, username);
            if (selectResults.length > 0) {
                return res.status(500).json({ error: "User already exists" });
            }

            // User does not exists, follow to hash the password
            bcrypt.hash(password, saltRounds, async (bcryptErr, hash) => {
                if (bcryptErr) {
                    return res.status(500).json({ error: bcryptErr });
                }
                
                const insertSql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
                const [insertResults] = await connection.query(insertSql, [username, email, hash]);

                const response = {
                    message: "User registered sucessfully",
                    userCreated: {
                        userId: insertResults.insertId,
                        username,
                        email
                    }
                };
                return res.status(201).json(response);
            })
        } catch (err) {
            return res.json(err);
        }
    }

    async login(req, res) {
        const { user, password } = req.body;
        const sql = "SELECT * FROM users WHERE username = ? OR email = ?";
        const [results] = await connection.query(sql, [user, user]);
        if (results.length < 1) {
            return res.status(401).json({ error: "Authentication failure" });
        }

        bcrypt.compare(password, results[0].password, (err, result) => {
            if (err) {
                return res.status(401).json({ error: "Authentication failure" });
            }
            if (result) {
                const token = jwt.sign({
                    id: results[0].id,
                    user: results[0].username
                }, process.env.JWT_KEY,
                {
                    expiresIn: "5d"
                });
                
                return res.status(200).json({
                    alert: "Authentication sucessfull",
                    token,
                    ok: true
                });
            }
            return res.status(401).json({ error: "Authentication failure", ok: false });
        });
    }


    async editProfile(req, res) {
        try {
            const { id } = req.params;
            const findUserSql = "SELECT * FROM users WHERE id = ?";
            const [findUserResults] = await connection.query(findUserSql, id);
            if (findUserResults.length < 1) {
                return res.status(404).json({ error: "User not found" });
            }

            let body = {};
            for (let b in req.body) {
                if (req.body[b] !== null) {
                    body = {...body, [b]: req.body[b]};
                }
            }

            if (!body || !Object.keys(body).length) {
                return res.status(400).json( { error: "Body does not exists" });
            }

            let editSql = 'UPDATE users SET';
            Object.entries(body).forEach(([key, value]) => {
                const string = ` ${key}="${value}",`;
                editSql += string;
            })
            editSql = editSql.slice(0, -1);
            editSql += " WHERE id = ?";

            const [results] = await connection.query(editSql, id);
            return res.status(200).json({alertMessage: "User data changed sucessfully", results});
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    async changePassword(req, res) {
        try {
            const { id } = req.params;
            const { password, newPwd } = req.body;
            const findUsersQL = "SELECT * FROM users WHERE id = ?";
            const [findUserResults] = await connection.query(findUsersQL, id);
            if (findUserResults.length < 1) {
                return res.status(404).json({ error: "User not found" });
            }

            const isMatch = await new Promise((resolve, reject) => {
                bcrypt.compare(password, findUserResults[0].password, async (error, result) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(result);
                });
            });
            
            if (!isMatch) {
                return res.status(401).json({ error: "Authentication failure" });
            }

            const hash = await new Promise((resolve, reject) => {
                bcrypt.hash(newPwd, saltRounds, (bcryptErr, hash) => {
                    if (bcryptErr) {
                        return reject(bcryptErr);
                    }
                    return resolve(hash);
                });
            });

            const changePwdSql = "UPDATE users SET password=? WHERE id=?";
            const [changeResults] = await connection.query(changePwdSql, [hash, id]);

            return res.status(204).end();
        } catch (err) {
            return res.status(400).send(err);
        }

    }

    async resetPassword(req, res) {
        try {
            const { token } = req.params;
            const { newPassword } = req.body;
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            if (!decoded) {
                return res.status(401).json({ alertMessage: "Invalid token" });
            }

            const findUserSql = "SELECT * FROM users WHERE id=?";
            const [results] = await connection.query(findUserSql, decoded.id);
            if (results.affectedRows < 1) {
                return res.status(400).json({ error: "User does not exists"});
            }

            const hash = await new Promise((resolve, reject) => {
                bcrypt.hash(newPassword, saltRounds, (bcryptErr, hash) => {
                    if (bcryptErr) {
                        return reject(bcryptErr)
                    }
                    return resolve(hash)
                });
            });

            const updatePasswordSql = "UPDATE users SET password=? WHERE id=?"
            const [updatedPwdResults] = await connection.query(updatePasswordSql, [hash, decoded.id])

            return res.status(200).json({ alertMessage: "Password updated"});
        } catch (err) {
            return res.status(400).send(err);
        }

    }

    async forgotPassword(req, res) {
        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_APP_PASSWORD
                }
            });
            
            const { email } = req.body;
            const sql = "SELECT id, username FROM users WHERE email=?";
            const [results] = await connection.query(sql, email)
            if (results.affectedRows < 1) {
                return res.status(400).json({ error: "User does not exists"});
            }
            const token = jwt.sign({
                id: results[0].id,
                user: results[0].username
            }, process.env.JWT_KEY,
            {
                expiresIn: "5d"
            });
            
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: "Reset password",
                html: `
                    <p>Click on the following link to reset your password:</p>
                    <a href="http://localhost:5173/reset-password/${token}">http://localhost:5173/reset-password/${token}</a>
                    <p>The link will expire in 10 minutes.</p>
                    <p>If you didn't request a password reset, please ignore this email.</p>
                `
            };
            
            transporter.sendMail(mailOptions, (err, info) => {
                console.log(err)
                if (err) {
                    return res.status(500).json({ message: err.message })
                }
                return res.status(200).json(info)
            })
        } catch (err) {
            return res.status(400).send(err);
        }

    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const sql = "DELETE FROM users WHERE id = ?";
            const [results] = await connection.query(sql, id)
            if (results.affectedRows < 1) {
                return res.status(400).json({ error: "User does not exists"});
            }
            return res.status(204).end();
        } catch (err) {
            return res.status(400).send(err);
        }

    }
}

export default new UsersControllers();
