import styles from './Search.module.css';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import VerticalCard from '../../components/VerticalCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Search() {

    const [result, setResult] = useState("")
    const params = useParams()

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`http://localhost:4000/search/${params.s}`) 
            const data = await response.json()
            if (!data.ok) {
                return
            }
            setResult(data.results)
        }
        getData()
    }, [params.s])


    return (
        <>
            <Header />
            <Container>
                <h2 className={styles.response}>Results for {`"${params.s}"`}</h2>
                <div className={styles.container}>
                    {result.length > 0 ?
                        result.map(r => <VerticalCard key={r.title} movie={r}/>)
                    :
                        <h1>There is no content for &quot;{params.s}&quot;</h1>}
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Search
