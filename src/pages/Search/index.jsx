import styles from './Search.module.css'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import VerticalCard from '../../components/VerticalCard'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Search() {

    const [result, setResult] = useState("")
    const params = useParams()

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("http://localhost:3000/movies") 
            const data = await response.json()
            const filtered = data.filter(d => {
                const title = String(d.title).toLowerCase()
                const genre = String(d.genre).toLowerCase()
                return title.includes(params.s) || d.year.includes(params.s) || genre.includes(params.s)
            })
            setResult(filtered)
            
        }
        getData()
    }, [params.s])

    return (
        <>
            <Header />
            <Container>
                <h2 className={styles.response}>Results for {`"${params.s}"`}</h2>
                <div className={styles.container}>
                    {
                        result.length > 0 ? 
                            result.map(r => <VerticalCard key={r.id} movie={r}/>)
                        :
                            <h1>Nenhum resultado</h1>
                    }                    
                </div>

            </Container>
            <Footer />
        </>
    );
}

export default Search
