import { useState } from 'react';
import styles from './RegisterForm.module.css'
import { FiEye, FiEyeOff } from 'react-icons/fi';

function RegisterForm() {

    // ORGANIZAR MELHOR

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [type, setType] = useState("password")
    const [icon, setIcon] = useState(<FiEyeOff/>)

    function handleToggle() {
        if (type==="password") {
            setIcon(<FiEye/>)
            setType("text")
        } else {
            setIcon(<FiEyeOff/>)
            setType("password")
        }
    }

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
                    type="email" 
                    autoComplete="off"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    maxLength="70"
                    required
                />
                <label htmlFor="password">Password</label>
                <div className={styles.pwdDiv}>
                    <input
                        name="password"
                        type={type}
                        autoComplete="off"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        maxLength="50"
                        required
                    />
                    <span onClick={handleToggle}>{icon}</span>
                </div>
                <button>Sign Up</button>
            </form>
            {
                message && <div className={styles.message}>{message}</div>
            }
        </div>

    );
}

export default RegisterForm
