/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styles from './MovieDetail.module.css'

function MovieDetail({movie}) {

    const [info, setInfo] = useState("")
    const key = "9ec5cbce"

    useEffect(() => {
        const getInfo = async () => {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${key}&t=${movie.title}&y=${movie.year}`)
            const data = await response.json()
            setInfo(data)
        }
        getInfo()
    }, [movie])

    // ADICIONAR INFOS AO BANCO DE DADOS

    return (
        <>
            {
                info && movie && (
                    <div className={styles.movieDetail}>
                        <div>
                            <img className={styles.poster} src={movie.poster} alt="" />                    
                        </div>
                        <div className={styles.table}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Description</th><td>{movie.description}</td>
                                    </tr>
                                    <tr>
                                        <th>Quote</th><td>{movie.quote}</td>
                                    </tr>
                                    <tr>
                                        <th>Year</th><td>{movie.year}</td>
                                    </tr>
                                    <tr>
                                        <th>IMDb rating</th><td>⭐{info.Ratings[0].Value}</td>
                                    </tr>
                                    <tr>
                                        <th>Writer</th><td>{info.Writer}</td>
                                    </tr>
                                    <tr>
                                        <th>Voice Actors</th><td>{info.Actors}</td>
                                    </tr>
                                    <tr>
                                        <th>Genre</th><td>{info.Genre}</td>
                                    </tr>
                                    <tr>
                                        <th>Awards</th><td>{info.Awards}</td>
                                    </tr>
                                    <tr>
                                        <th>Runtime</th><td>{info.Runtime}</td>
                                    </tr>
                                    <tr>
                                        <th>BoxOffice</th><td>{info.BoxOffice}</td>
                                    </tr>
                                </tbody>
                            </table>     
                        </div>
                    </div>                    
                )
            }

        </>
    );
}

export default MovieDetail
