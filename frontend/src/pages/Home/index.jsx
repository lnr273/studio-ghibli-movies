import Container from "../../components/Container";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import styles from './Home.module.css'
import { useEffect, useState } from "react";

function Home() {

    const [movies, setMovies] = useState([])
    const [banner, setBanner] = useState("")

    useEffect(() => {
        const getBanner = async () => {
            const response = await fetch("http://localhost:3000/banner")
            const data = await response.json()
            setBanner(data.home)
        }
        getBanner()
    }, [])
    
    useEffect(() => {
        const response = async () => {
            const response = await fetch("http://localhost:3000/movies")
            const data = await response.json()
            setMovies(data)
        }

        response()
    }, [])

    return (
        <>
            <main className={styles.home}>
                <Header />
                <Banner image={banner} title="Studio Ghibli Movies"/>
                <Container title="Recommended Movies">
                    <div className={styles.container}>
                        {movies.map(movie => movie.id < 7 && (
                            <Card key={movie.id} movie={movie}/>
                        ))}                        
                    </div>
                    <Button value="/movies">See More</Button>
                </Container>
                <Footer />
            </main>
        </>
    );
}

export default Home
