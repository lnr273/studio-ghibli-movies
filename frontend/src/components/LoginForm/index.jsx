import { useState } from 'react';
import setCookie from "../../hooks/setCookie.js"
import removeCookie from "../../hooks/setCookie.js"
import styles from "./LoginForm.module.css";

function LoginForm() {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        const body = {
            user,
            password
        }

        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        if (data.error) {
            setMessage(data.error)
        }

        const {token} = data

        removeCookie("user")
        setCookie("user", token)
        window.location.reload()
    }
    return (
        <div className={styles.login}>
            <h2>Login to your account</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user">E-mail or username</label>
                <input 
                    name="user" 
                    id="user" 
                    type="text" 
                    autoComplete="off"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    maxLength="100"
                    required
                />
                <label htmlFor="password">Password</label>
                <input 
                    name="password" 
                    id="password" 
                    type="text" 
                    autoComplete="off"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    maxLength="50"
                    required
                />
                <button>Sign in</button>
                {
                message && <div className={styles.message}>{message}</div>
                }
            </form>
        </div>

    );
}

export default LoginForm
