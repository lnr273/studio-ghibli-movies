import styles from './Footer.module.css'
import { DiGithubBadge } from "react-icons/di";

function Footer() {
    return (
        <footer className={styles.footer}>
            <span>Desenvolvido por Luan &copy; {new Date().getFullYear()}</span>
            <a href="https://github.com/lnr273" target='_blank' rel='noopener noreferrer'>
                    <DiGithubBadge className={styles.github}/>
            </a>
        </footer>
    );
}

export default Footer

