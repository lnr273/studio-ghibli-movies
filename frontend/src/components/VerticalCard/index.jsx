/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import whiteHeart from '../../assets/white-heart.svg';
import redHeart from '../../assets/red-heart.svg';
import styles from './VerticalCard.module.css';
import { useEffect, useState } from 'react';
import getCookie from '../../hooks/getCookie';

function VerticalCard({movie}) {

    const [favorites, setFavorites] = useState([])
    const [token, setToken] = useState("")

    useEffect(() => {
        setToken(getCookie("user"))
        if (token) {
            const getFav = async () => {
                const response = await fetch(`http://localhost:4000/favorites/${token}`)
                const data = await response.json()
                setFavorites(data)
            }
            getFav()
        }
    }, [favorites])

    async function isRepeated() {
        const repeated = favorites.filter(fav => fav.movieId === movie.id)
        if (repeated.length > 0) {
            fetch(`http://localhost:4000/favorites/${token}`, {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({movieId: repeated[0].movieId})
            })
            return true
        }
        return false
    }

    async function addFavorite(id) {
        if (await isRepeated()) {
            return
        }
        fetch(`http://localhost:4000/favorites/${token}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({movieId: id})
        })
        return
    }

    const isFavorite = favorites.some(item => item.movieId === movie.id)
    const icon = isFavorite ? redHeart : whiteHeart

    return (
        <div className={styles.verticalCard}>
            <img src={movie.poster} alt={`${movie.title} poster`} />
            <Link to={`/movies/${movie.id}`}>
                <span className={styles.info}>{movie.title} ({movie.year})</span>
            </Link>
            <img 
                onClick={() => addFavorite(movie.id)}
                className={`${"material-symbols-outlined"} ${styles.favorite}`}
                src={icon}
            ></img>
        </div>
    );
}

export default VerticalCard
