import app from "./app.js"
import connection from "./database/connection.js"

const port = 3000

connection.connect((err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("Database connected")
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`)
        })
    }
})
