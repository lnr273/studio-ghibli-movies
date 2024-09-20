import jwt from "jsonwebtoken"

export function isLoggedIn(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decode = jwt.verify(token, process.env.JWT_KEY)
        req.user = decode
        next()
    } catch (err) {
        return res.status(401).json({ error: "Authentication failure" })
    }

}
