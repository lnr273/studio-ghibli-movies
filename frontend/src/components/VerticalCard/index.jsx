/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useFavoriteContext } from '../../contexts/Favorites';
import whiteHeart from '../../assets/white-heart.svg'
import redHeart from '../../assets/red-heart.svg'
import styles from './VerticalCard.module.css'

function VerticalCard({movie}) {

    const {favorite, addFavorite} = useFavoriteContext()
    const isFavorite = favorite.some(item => item.id === movie.id)
    const icon = isFavorite ? redHeart : whiteHeart

    return (
        <div className={styles.verticalCard}>
            <img src={movie.poster} alt={`${movie.title} poster`} />
            <Link to={`/movies/${movie.title.toLowerCase().split(" ").join("-")}`}>
                <span className={styles.info}>{movie.title} ({movie.year})</span>
            </Link>
            <img 
                onClick={() => addFavorite(movie)}
                className={`${"material-symbols-outlined"} ${styles.favorite}`}
                src={icon}
            ></img>
        </div>
    );
}

export default VerticalCard
