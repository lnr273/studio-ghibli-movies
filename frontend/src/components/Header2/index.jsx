import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import SearchMovie from "../SearchMovie";
import { useState } from "react";

function Header2() {

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <div className={styles.header}>
                <figure className={styles.logo}>
                    <Link to="/">
                        <img src="/ghibli-w.png" alt="logo ghibli" />
                    </Link>
                </figure>
            </div>
            <div className={styles.header2}>
                <nav className={`${styles.links} ${ showMenu ? styles.show : '' }`}>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/about">About</Link>
                    <Link to="/myaccount">My Account</Link>
                    <SearchMovie />
                </nav>
                <div 
                    className={styles.menuBtn}
                    onClick={toggleMenu}
                >
                    <span className={styles.row}></span>
                    <span className={styles.row}></span>
                    <span className={styles.row}></span>
                </div>                
            </div>

        </>
    );
}

export default Header2
