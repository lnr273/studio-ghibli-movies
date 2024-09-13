import { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import Carousel from '../../components/Carousel';
import Container from '../../components/Container';
import Header from '../../components/Header';
import styles from './Movies.module.css';
import Slide from '../../components/Slide';
import VerticalCard from '../../components/VerticalCard';
import Footer from '../../components/Footer';

function Movies() {

    const [movies, setMovies] = useState([])
    const [banner, setBanner] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("http://localhost:3000/movies")
            const data = await response.json()
            data.sort((a, b) => a.year - b.year)
            setMovies(data)
        }
        getData()
    }, [])
    useEffect(() => {
        const getBanner = async () => {
            const response = await fetch("http://localhost:3000/banner")
            const data = await response.json()
            setBanner(data.movies)
        }
        getBanner()
    }, [])

    return (
        <div className={styles.movies}>
            <Header />
            <Banner image={banner} title="Explore Movies"/>
            <Container title="Best Rated Movies">
                <div className={styles.bestRated}>
                    <Carousel>
                        {
                            movies.map(movie => movie.imdbRating > 8 && (
                                <Slide key={movie.id} movie={movie}/>                        
                            ))
                        }
                    </Carousel>
                </div>
                <div className={styles.posters}>
                    {
                        movies.map(movie => (
                            <VerticalCard key={movie.id} movie={movie}/>                            
                        ))
                    }
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Movies
