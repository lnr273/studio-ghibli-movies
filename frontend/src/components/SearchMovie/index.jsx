import { useState } from 'react';
import styles from './SearchMovie.module.css'
import { useNavigate } from "react-router-dom";


function SearchMovie() {

    const [inputValue, setInputValue] = useState("")
    const[searchVisible, setSearchVisible] = useState(false)
    const navigate = useNavigate()
    
    return (
        <div className={styles.search}>
            <input 
                style={searchVisible ? {display: "flex"} : {display: "none"}}
                type="text" 
                placeholder='Search by name, year or genre...'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <img src="/src/components/SearchMovie/search.svg" alt="search icon" 

            onClick={() => {
                setSearchVisible(!searchVisible)
                if (searchVisible && inputValue) navigate(`/search/${inputValue}`)
                setInputValue("")
            }}/>

        </div>
    );
}

export default SearchMovie
