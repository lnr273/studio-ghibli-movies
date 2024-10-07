import { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import setCookie from "../../hooks/setCookie.js";
import removeCookie from "../../hooks/setCookie.js";
import styles from "./LoginForm.module.css";
import { Link } from 'react-router-dom';
import AlertMessage from '../AlertMessage/index.jsx';

function LoginForm() {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [type, setType] = useState("password")
    const [icon, setIcon] = useState(<FiEyeOff/>)
    const [message, setMessage] = useState("")

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
        const body = {user,password}

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
        if (token) {
            removeCookie("user")
            setCookie("user", token)
            window.location.reload()
        }
    }

    
    return (
        <div className={styles.login}>
            <h2>Login to your account</h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <label htmlFor="user">E-mail or username *</label>
                <div>
                    <input 
                        name="user"
                        type="text" 
                        autoComplete="off"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                        maxLength="100"
                        required
                    />                    
                </div>
                <label htmlFor="password">Password *</label>
                <div className={styles.pwdDiv}>
                    <input 
                        name="password"
                        type={type} 
                        autoComplete="off"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        maxLength="100"
                        required
                    />                    
                    <span onClick={handleToggle}>{icon}</span>
                </div>
                <Link to="/forgot-password">
                    <span className={styles.forgot}>Forgot password?</span>
                </Link>
                <button>Sign in</button>
                {
                    message && <AlertMessage>{message}</AlertMessage>
                }
            </form>
        </div>
    );
}

export default LoginForm
