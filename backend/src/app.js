import express from "express"
import router from "./routes.js"
import cors from 'cors'
import session from "express-session"

const app = express()

app.use(express.json())
app.use(cors())
app.use(session({
    secret: "27d-03M-200y6",
    resave: false,
    saveUninitialized: false
}))

app.use(router)

export default app