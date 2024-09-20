import { useState } from 'react';
import styles from './LoginForm.module.css'

function LoginForm() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

    }

    return (
        <div className={styles.login}>
            <h2>Login to your account</h2>
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
                <button>Sign in</button>
            </form>
        </div>

    );
}

export default LoginForm
