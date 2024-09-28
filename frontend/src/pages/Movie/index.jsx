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
    const [recommended, setRecommended] = useState("")
    const params = useParams()

    useEffect(() => {
        const getMovie = async () => {
            const response = await fetch(`http://localhost:4000/movies/${params.id}`)
            const data = await response.json()
            setMovie(data[0])
        }
        getMovie()

    }, [params.title])

    useEffect(() => {
        const getRecommended = async () => {
            const response = await fetch(`http://localhost:4000/genre/${params.id}`)
            const data = await response.json()
            if (data.movies < 2) {
                return
            }
            setRecommended(data.genreResults)
        }
        getRecommended()
    }, [params.title])

    return (
        <>
            <Header />
            {
                movie && 
                <>
                    <Banner image={movie.background} title={movie.title}/>
                    <Container title="Details">
                        <MovieDetail movie={movie}/>
                        {recommended && 
                            <>
                                <h2>Related Movies</h2>
                                <div className={styles.container}>
                                    {recommended.map(r => <VerticalCard key={r.title} movie={r}/>)}
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
