import { Link } from "react-router-dom";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import styles from "./LoggedIn.module.css";
import { jwtDecode } from "jwt-decode";

function LoggedIn() {
    
    function logout() {
        removeCookie("user")
        window.location.reload()
    }

    const decoded = jwtDecode(getCookie("user"))

    return (
        <div className={styles.loggedin}>
            <h1>Welcome back, {decoded.user}</h1>
            <p>What do you want to do now?</p>
            <div className={styles.cards}>
                <Link to="/">
                    <div>
                        <h3>Home</h3>
                        <span>Explore recommmended movies</span>
                    </div>
                </Link>
                <Link to="/movies">
                    <div>
                        <h3>Movies</h3>
                        <span>See all movies available</span>
                    </div>
                </Link>
                <Link to="/favorites">
                    <div>
                        <h3>Favorites</h3>
                        <span>Manage your favorites movies</span>
                    </div>
                </Link>
                <Link to="/about">
                    <div>
                        <h3>About</h3>
                        <span>Read about the Studio Ghibli</span>
                    </div>  
                </Link>              
            </div>
            <button onClick={logout}>Log out</button>
        </div>
    );
}

export default LoggedIn
