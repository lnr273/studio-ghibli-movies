/* eslint-disable react/prop-types */
import styles from "./ProfileLinks.module.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from 'react-icons/fi';

function ProfileLinks({title, description, link}) {
    return (
        <div className={styles.card}>
            <Link to={link}>
                <h3>{title}</h3>
                <span><FiArrowRight/></span>
            </Link>
            <p>{description}</p>
        </div>
    );
}

export default ProfileLinks
