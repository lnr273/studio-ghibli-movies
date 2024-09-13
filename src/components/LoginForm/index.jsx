import styles from './LoginForm.module.css'

function LoginForm() {
    return (
        <div className={styles.login}>
            <h2>Login to your account</h2>
            <form action="post">
                <label>E-mail</label>
                <input type="text" autoFocus autoComplete="off"/>
                <label>Password</label>
                <input type="text" autoComplete="off"/>
                <button>Sign in</button>
            </form>
        </div>

    );
}

export default LoginForm
