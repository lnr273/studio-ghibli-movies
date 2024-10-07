import { useState } from "react";
import styles from "./ResetPassword.module.css";
import Header from "../../components/Header/index.jsx";
import Container from "../../components/Container/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Button from "../../components/Button/index.jsx";
import AlertMessage from "../../components/AlertMessage/index.jsx";

import { useParams } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

function ResetPassword() {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")
    const [type, setType] = useState("password")
    const [icon, setIcon] = useState(<FiEyeOff/>)
    const params = useParams()

    function handleToggle() {
        if (type==="password") {
            setIcon(<FiEye/>)
            setType("text")
        } else {
            setIcon(<FiEyeOff/>)
            setType("password")
        }
    }

    async function sendEmail(e) {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage("Passwords are not matching.")
            return
        }

        const { token } = params
        const response = await fetch(`http://localhost:4000/reset-password/${token}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({newPassword: password})
        })
        const data = await response.json()
        if (data.alertMessage) {
            setMessage(data.alertMessage)
        }
        console.log(data)
        return
    }

    return (
        <>
        <Header />
        <Container>
            <h1 className={styles.recEmailTitle}>Update password</h1>
            <form className={styles.forgotForm} onSubmit={sendEmail}>
                <label htmlFor="newPassword">New Passord *</label>
                <div className={styles.pwdDiv}>
                    <input 
                        name="passsword"
                        type={type} 
                        autoComplete="off"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        maxLength="100"
                        required
                    />
                    <span onClick={handleToggle}>{icon}</span>
                </div>
                
                <label htmlFor="confimrPassword">Confirm Password *</label>
                <input
                    name="newPassword"
                    type={type} 
                    autoComplete="off"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    maxLength="100"
                    required
                />
                <button>Send</button>
            </form>
            {
                message && 
                <>
                    <AlertMessage>{message}</AlertMessage>
                    <Button value="/myaccount">Go to Log in</Button>
                </>
            }
        </Container>
        <Footer />
        </>
    );
}

export default ResetPassword;
