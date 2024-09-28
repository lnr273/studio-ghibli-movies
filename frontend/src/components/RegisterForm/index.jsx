import { useState } from 'react';
import styles from './RegisterForm.module.css'

function RegisterForm() {

    // ORGANIZAR MELHOR

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        const body = {
            username,
            email,
            password
        }

        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        
        if (data.error) {
            setMessage(data.error)
        } else {
            setMessage(data.message)
        }
    }

    return (
        <div className={styles.register}>
            <h2>Register a new account</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    name="username" 
                    id="username" 
                    type="text" 
                    autoComplete="off"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    maxLength="30"
                    required
                />
                <label htmlFor="email">E-mail</label>
                <input 
                    name="email" 
                    id="email" 
                    type="text" 
                    autoComplete="off"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    maxLength="70"
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
                <button>Sign Up</button>
            </form>
            {
                message && <div className={styles.message}>{message}</div>
            }
        </div>

    );
}

export default RegisterForm
