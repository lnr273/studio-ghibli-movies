import mysql from "mysql2/promise"
import app from "./app.js"
import "dotenv/config"

const port = 4000

export const connection = await mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "1234",
    database: "ghibli_db"
})

console.log("Database connected")
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
