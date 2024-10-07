import { useState } from "react";
import styles from "./EmailRecovery.module.css";
import Header from "../../components/Header/index.jsx";
import Container from "../../components/Container/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import AlertMessage from "../../components/AlertMessage/index.jsx";

function EmailRecovery() {
    
    const [recEmail, setRecEmail] = useState("")
    const [message, setMessage] = useState("")

    async function sendEmail(e) {
        e.preventDefault()
        const response = await fetch("http://localhost:4000/forgot-password", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email: recEmail})
        })
        const data = await response.json()

        if (!data.length) {
            setMessage("E-mail not valid. Please try again.")
        }
        setMessage("E-mail sent, check your mailbox.")
        return
    }

    return (
        <>
        <Header />
        <Container>
            <h1 className={styles.recEmailTitle}>Recovery Email</h1>
            <form className={styles.forgotForm} onSubmit={sendEmail}>
                <div>
                    <label htmlFor="recEmail">Recovery email</label>
                    <input 
                        name="email"
                        type="text" 
                        autoComplete="off"
                        value={recEmail}
                        onChange={e => setRecEmail(e.target.value)}
                        maxLength="100"
                        required
                    />                      
                </div>
                <span>A e-mail will be send to allow you to updated your password.</span>  
                <button>Send</button>
            </form>
            {message && <AlertMessage>{message}</AlertMessage>}
        </Container>
        <Footer />
        </>
    );
}

export default EmailRecovery;
