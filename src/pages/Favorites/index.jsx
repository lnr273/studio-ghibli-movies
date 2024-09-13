import styles from './Favorites.module.css'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Container from '../../components/Container'
import Card from '../../components/Card'
import { useFavoriteContext } from '../../contexts/Favorites'
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'

function Favorites() {

    const [banner, setBanner] = useState("")
    const {favorite} = useFavoriteContext()

    useEffect(() => {
        const getBanner = async () => {
            const response = await fetch("http://localhost:3000/banner")
            const data = await response.json()
            setBanner(data.favorites)
        }
        getBanner()
    }, [])

    return (
        <div>
            <Header />
            <Banner image={banner} title="Favorites Movies"/>
            <Container title={"My Favorites"}>
                <div className={styles.favorites}>
                    {
                        favorite.length > 0 ? 
                            favorite.map(movie => <Card key={movie.id} movie={movie}/>) 
                        :
                            <h3>There is no movies saved</h3>
                    }
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Favorites
