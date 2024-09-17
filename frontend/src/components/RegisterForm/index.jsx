import { useState } from 'react';
import styles from './RegisterForm.module.css'
import { regexValidation, validateUser } from '../../../../backend/utils/validateUser.js';

function RegisterForm() {

    // ORGANIZAR MELHOR

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        const user = { username, email, password }
        const { regexMessage } = regexValidation(user)
        const { isValid, alertMessage } = await validateUser(user)

        if (regexMessage) {
            setMessage(regexMessage)
            return
        }

        if (!isValid) {
            setMessage(alertMessage)
            return
        }
        
        const response = await fetch("http://localhost:4000/users", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(user)
        })
        
        if (!response?.ok) {
            setMessage(alertMessage)
            return
        }

        setMessage(alertMessage)

        return { isUserRegistered: true }
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
                // CSS
            }
        </div>

    );
}

export default RegisterForm
