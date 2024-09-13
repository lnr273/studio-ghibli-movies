import styles from './Page404.module.css';
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from '../../components/Button';
import { useState } from 'react';

function Page404() {

    const [inputValue, setInputValue] = useState("")
    
    return (
        <>
            <Header />
            <Container>
                <div className={styles.error}>
                    <h1>404 - Page not Found</h1>
                    <Button value={"/"}>
                        Go back to Home
                    </Button>
                    <div>
                        <span>Or try searching for something</span>
                        <input 
                            type="text" 
                            placeholder='Search by name, year or genre...'
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                        />
                        <Button value={`/search/${inputValue}`}>
                            Search
                        </Button>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Page404
