import { validateUser } from "../../utils/validateUser.js";
import { connection } from "../server.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;

class UsersControllers {
    async showAllUsers(req, res) {
        try {
            const sql = "SELECT * FROM users";
            const [result] = await connection.query(sql);
            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({ error: 'Server error' });
        }
    }

    async showUserById(req, res) {
        try {
            const { id } = req.params;
            const sql = "SELECT * FROM users WHERE id = ?";
            const [result] = await connection.query(sql, id, `Id '${id}' not found`);
            res.status(200).json(result[0]);
        } catch (err) {
            res.status(404).json({ error: err });
        }
    }

    async register(req, res) {
        try {
            const {username, email, password} = req.body;
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
                
                const dataValidated = validateUser({username, email});
                if (!dataValidated.isValid) {
                    return res.status(403).json({ error: dataValidated.alertMessage });
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
            res.json(err);
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
                })
                
                return res.status(200).json({
                    alert: "Authentication sucessfull",
                    token,
                    ok: true
                });
            }
            return res.status(401).json({ error: "Authentication failure", ok: false });
        });
    }


    async delete(req, res) {
        try {
            const { id } = req.params;
            const sql = "DELETE FROM users WHERE id = ?";
            const [results] = await connection.query(sql, id)
            console.log(results)
            if (results.affectedRows < 1) {
                return res.status(400).json({ error: "User does not exists"})
            }
            res.status(204).json(results);
        } catch (err) {
            res.status(400).send(err);
        }

    }
}

export default new UsersControllers();
