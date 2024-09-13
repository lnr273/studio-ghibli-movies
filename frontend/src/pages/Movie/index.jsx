import styles from './Movie.module.css'
import MovieDetail from "../../components/MovieDetail";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import VerticalCard from "../../components/VerticalCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from '../../components/Footer';

function Movie() {

    const [movie, setMovie] = useState("")
    const [data, setData] = useState("")
    const [fil, setFil] = useState("")
    const params = useParams()

    useEffect(() => {
        const getMovie = async () => {
            const response = await fetch("http://localhost:3000/movies")
            const data = await response.json()
            setData(data)
            const movieFil = data.filter(m => m.title.toLowerCase().split(" ").join("-") === params.title)
            setMovie(movieFil[0])
        }
        getMovie()

    }, [params.title])

    useEffect(() => {
        if (data) {
            const filtered = (data.filter(m => m.genre.includes(movie.genre) && m.id !== movie.id))
            setFil(filtered)
        }
    }, [data])

    return (
        <>
            <Header />
            {
                movie && 
                <>
                    <Banner image={movie.images.background} title={movie.title}/>
                    <Container title="Details">
                        <MovieDetail movie={movie}/>
                        {
                            fil.length > 0 &&
                                <>
                                    <h2>Related Movies</h2>
                                    <div className={styles.container}>
                                        {
                                            fil.map(m => m.genre.includes(movie.genre) && m.id !== movie.id && <VerticalCard key={m.id} movie={m} />)
                                        }
                                    </div>
                                </>
                        }
                    </Container>
                    <Footer />
                </>
            }
        </>
    );
}

export default Movie
