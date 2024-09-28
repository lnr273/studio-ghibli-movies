import styles from './Favorites.module.css'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import Button from '../../components/Button'
import getCookie from "../../hooks/getCookie.js"
import { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";
import VerticalCard from '../../components/VerticalCard/index.jsx'

function Favorites() {

    const [banner, setBanner] = useState("")
    const [favorites, setFavorites] = useState("")
    const [movies, setMovies] = useState("")
    const [alert, setAlert] = useState("")

    useEffect(() => {
        const getBanner = async () => {
            const response = await fetch("http://localhost:4000/banner/favorites")
            const data = await response.json()
            setBanner(data[0].image)
        }
        getBanner()
    }, [])

    useEffect(() => {
        const getFavorites = async () => {
            const token = getCookie("user")
            if (token) {
                const decoded = jwtDecode(token)
                const response = await fetch(`http://localhost:4000/favorites/${decoded.id}`)
                const data = await response.json()
                setFavorites(data)
                return
            }
            setAlert("Please, log in or create a new account to save movies")
        }
        getFavorites()
    }, [])

    useEffect(() => {
        const getMovies = async () => {
            if (favorites.length > 0) {
                const newMovie = []
                for (const fav of favorites) {
                    const response = await fetch(`http://localhost:4000/movies/${fav.movieId}`)
                    const data = await response.json()
                    newMovie.push(data[0])
                }
                setMovies(newMovie)
            }
        }
        getMovies()
    }, [favorites])

    return (
        <div>
            <Header />
            <Banner image={banner} title="Favorites Movies"/>
            <Container title={"My Favorites"}>
                <div className={styles.favorites}>
                    {
                        alert ? (
                            <div>
                                <h3>{alert}</h3>
                                <Button value="/myaccount">Go to My Account</Button>
                            </div>
                        ) : (
                            movies.length > 0 ? 
                                movies.map(movie => <VerticalCard key={movie.id} movie={movie}/>) 
                            :
                                <h3>There is no movies saved</h3>                            
                        )
                    }
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Favorites
