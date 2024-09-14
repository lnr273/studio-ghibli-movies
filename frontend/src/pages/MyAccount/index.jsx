import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';
import styles from './MyAccount.module.css';
import RegisterForm from '../../components/RegisterForm';

function Login() {
    return (
        <>
            <Header />
            <Container>
                <div className={styles.forms}>
                    <LoginForm />
                    <RegisterForm />
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Login
