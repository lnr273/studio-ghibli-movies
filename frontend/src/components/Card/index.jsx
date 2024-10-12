/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './Card.module.css'

function Card({movie}) {
    return (
        <div className={styles.card}>
            <img className={styles.poster} src={movie.background} alt={`${movie.title} image`} />
            <Link to={`/movies/${movie.id}`}>
                <div className={styles.detail}>
                    <h4 className={styles.movieName}>{movie.title}</h4>
                </div>              
            </Link>
        </div>
    );
}

export default Card
