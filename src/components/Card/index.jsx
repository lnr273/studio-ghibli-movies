/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './Card.module.css'
import { useFavoriteContext } from '../../contexts/Favorites';
import whiteHeart from '../../assets/white-heart.svg'
import redHeart from '../../assets/red-heart.svg'

function Card({movie}) {

    const {favorite, addFavorite} = useFavoriteContext()
    const isFavorite = favorite.some(item => item.id === movie.id)
    const icon = isFavorite ? redHeart : whiteHeart

    return (
        <div className={styles.card}>
            <img className={styles.poster} src={movie.background} alt={`${movie.title} image`} />
            <Link to={`/movies/${movie.title.toLowerCase().split(" ").join("-")}`}>
                <div className={styles.detail}>
                    <h4 className={styles.movieName}>{movie.title}</h4>
                </div>              
            </Link>
            <img 
                onClick={() => addFavorite(movie)}
                className={`${"material-symbols-outlined"} ${styles.favorite}`}
                src={icon}
            ></img>
        </div>
    );
}

export default Card
