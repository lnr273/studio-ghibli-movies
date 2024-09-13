import styles from './RegisterForm.module.css'

function RegisterForm() {
    return (
        <div className={styles.login}>
            <h2>Register a new account</h2>
            <form action="post">
                <label>Username</label>
                <input type="text" autoComplete="off"/>
                <label>E-mail</label>
                <input type="text" autoComplete="off"/>
                <label>Password</label>
                <input type="text" autoComplete="off"/>
                <button>Sign up</button>
            </form>
        </div>

    );
}

export default RegisterForm
