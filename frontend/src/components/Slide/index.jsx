/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './Slide.module.css'

function Slide({movie}) {
    return (
        <Link to={`/movies/${movie.title.toLowerCase().split(" ").join("-")}`}>
            <div style={{backgroundImage: `url(${movie.background})`}} className={styles.slide}>
                <h2>{movie.title} ⭐{movie.imdbRating}</h2>
            </div>
        </Link>

    );
}

export default Slide
