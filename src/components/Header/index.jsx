import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import SearchMovie from "../SearchMovie";

function Header() {
    return (
        <header className={styles.header}>
            <figure className={styles.logo}>
                <Link to="/">
                    <img src="/ghibli-w.png" alt="logo ghibli" />
                </Link>
            </figure>
            <nav className={styles.links}>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/about">About</Link>
                <Link to="/myaccount">My Account</Link>
                <SearchMovie />
            </nav>
            {/* <Link to="/login">
                <button className={styles.login}>Login</button>
            </Link>
            <Link>
                <button className={styles.register}>Register</button>            
            </Link> */}
        </header>
    );
}

export default Header
