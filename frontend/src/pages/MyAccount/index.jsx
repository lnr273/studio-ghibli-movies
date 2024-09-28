import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';
import styles from './MyAccount.module.css';
import RegisterForm from '../../components/RegisterForm';
import getCookie from "../../hooks/getCookie.js";
import LoggedIn from '../../components/LoggedIn/index.jsx';

function MyAccount() {
    return (
        <>
            <Header />
            <Container>
                {
                    getCookie("user") ? (
                        <LoggedIn />
                    ) : (
                        <div className={styles.forms}>
                            <LoginForm />
                            <RegisterForm />
                        </div>                  
                    )
                }
            </Container>
            <Footer />
        </>
    );
}

export default MyAccount
