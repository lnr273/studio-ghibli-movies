import mysql from "mysql2/promise";
import app from "./app.js";
import "dotenv/config";

const port = process.env.PORT || 4000

export const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

console.log("Database connected")
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
