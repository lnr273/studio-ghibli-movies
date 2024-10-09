import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import styles from "./LoggedIn.module.css";
import stylesModal from "./Modal.module.css";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import ProfileLinks from "../ProfileLinks/index.jsx";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import AlertMessage from "../AlertMessage/index.jsx";
import { Link } from "react-router-dom";

function LoggedIn() {
    const decoded = jwtDecode(getCookie("user"))

    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [message, setMessage] = useState("")
    const [modal, setModal] = useState(false)
    const [password, setPassword] = useState("")
    const [newPwd, setNewPwd] = useState("")
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
    function logout() {
        removeCookie("user")
        window.location.reload()
    }
    function openModal() {
        setModal(!modal)
    }

    useEffect(() => {
        const getUser = async () => {
            const response = await fetch(`http://localhost:4000/users/${decoded.id}`)
            const data = await response.json()
            setNewUsername(data.username)
            setNewEmail(data.email)
        }
        getUser()
    }, [])

    async function saveNewSettings() {
        const profileBody = {
            username: newUsername || null,
            email: newEmail || null
        }

        const response = await fetch(`http://localhost:4000/edit/${decoded.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(profileBody)
        })
        const data = await response.json()
        if (data.alertMessage) setMessage(data.alertMessage)
    }

    async function saveNewPassword() {
        if (!password || !newPwd) {
            return
        }
        const pwdBody = {password, newPwd}
        const response = await fetch(`http://localhost:4000/newpwd/${decoded.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(pwdBody)
        })
        console.log(response.status)
        if (response.status === 401) {
            setMessage("Authentication failure")
        } else {
            setMessage("Password changed sucessfully")
        }
    }

    return (
        <div className={styles.loggedin}>
            <h1>Welcome back, {decoded.user}</h1>

            <p>What do you want to do now?</p>
            <div className={styles.cards}>
                <ProfileLinks title="Home" description="Explore recommended movies" link="/"/>
                <ProfileLinks title="Movies" description="See all movies available" link="/movies"/>
                <ProfileLinks title="Favorites" description="Manage your favorites movies" link="/favorites"/>
                <ProfileLinks title="About" description="Read about the Studio Ghibli" link="/about"/>
            </div>
            
            <h2>Edit your profile</h2>
            <div className={styles.profile} style={{display: modal ? "none" : "flex"}}>
                <label>Username</label>
                <input type="text" value={newUsername} onChange={e => setNewUsername(e.target.value)}/>

                <label>E-mail</label>
                <input type="text" value={newEmail} onChange={e => setNewEmail(e.target.value)}/>

                <button onClick={saveNewSettings}>Save</button>
            </div>
            <Link to="/myaccount/change-password">
                <span className={styles.change}>Change password</span>
            </Link>
            <div className={stylesModal.modal} style={{display: modal ? "flex" : "none"}}>
                <span onClick={openModal}>X</span>
                <h2>Change Password</h2>
                
                <label>Confirm your Password</label>
                <div className={stylesModal.pwdDiv}>
                    <input type={type} value={password} onChange={e => setPassword(e.target.value)}/>
                    <span onClick={handleToggle}>{icon}</span>
                </div>

                <label>New Password</label>
                <input type={type} value={newPwd} onChange={e => setNewPwd(e.target.value)}/>

                <button onClick={saveNewPassword}>Save</button>
            </div>
            {
                message && <AlertMessage>{message}</AlertMessage>
            }
            <div className={styles.hr}></div>
            <button onClick={logout}>Log out</button>
        </div>
    );
}

export default LoggedIn
