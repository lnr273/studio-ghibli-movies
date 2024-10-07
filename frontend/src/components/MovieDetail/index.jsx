/* eslint-disable react/prop-types */
import styles from './MovieDetail.module.css';

// FORMATAR BOXOFFICE

function MovieDetail({movie}) {
    return (
        <>
            {
                movie && (
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
                                        <th>Quote</th><td>&quot;{movie.quote}&quot;</td>
                                    </tr>
                                    <tr>
                                        <th>Year</th><td>{movie.year}</td>
                                    </tr>
                                    <tr>
                                        <th>IMDb rating</th><td>⭐{movie.imdbRating} / 10</td>
                                    </tr>
                                    <tr>
                                        <th>Writer</th><td>{movie.writer}</td>
                                    </tr>
                                    <tr>
                                        <th>Genre</th><td>{movie.genre}</td>
                                    </tr>
                                    <tr>
                                        <th>Awards</th><td>{movie.awards}</td>
                                    </tr>
                                    <tr>
                                        <th>BoxOffice</th><td>{movie.boxoffice.toLocaleString("pt-br", {style: "currency", currency: "USD"})}</td>
                                    </tr>
                                    <tr>
                                        <th>Runtime</th><td>{movie.runtime} min</td>
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

export default MovieDetail;
