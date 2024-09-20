import { connection } from "../server.js";

class MoviesControllers {
    async showAllMovies(req, res) {
        try {
            const sql = "SELECT * FROM movies";
            const [results] = await connection.query(sql);
            return res.status(200).json(results);
        } catch (err) {
            return res.status(404).json({ error: "Server error" });
        }
    }
    
    async showMovieByTitle(req, res) {
        try {
            const { title } = req.params;
            const sql = "SELECT * FROM movies WHERE title = ?";
            const [results] = await connection.query(sql, title);
            return res.status(200).json(results);
        } catch (err) {
            return res.status(404).json({ error: "Server error" });
        }
    }
    
    async showMoviesByGenre(req, res) {
        try {
            const { title } = req.params;
            const selectTitleSql = "SELECT * FROM movies WHERE title = ?";
            const [titleResults] = await connection.query(selectTitleSql, title);
            if (titleResults.length < 1) {
                return res.status(404).json({ error: `Title ${title} is not included in the database` });
            }

            const genre = `%${titleResults[0].genre}%`;
            const selectGenreSql = `SELECT title, poster, year FROM movies WHERE genre LIKE ? AND NOT title = ?`;
            const [genreResults] = await connection.query(selectGenreSql, [genre, title]);

            if (genreResults < 1) {
                return res.status(404).json({ moviesRecommended: false });
            }
            return res.status(200).json({genreResults, moviesRecommended: true});
        } catch (err) {
            return res.status(404).json({ error: "Server error" });
        }
    }
    
    async searchMovies(req, res) {
        try {
            const { s } = req.params;
            const search = `%${s}%`;
            const sql = "SELECT title, poster, year, genre FROM movies WHERE title LIKE ? OR year LIKE ? OR genre LIKE ?";
            const [results] = await connection.query(sql, [search, search, search]);
            if (results.length < 1) {
                return res.status(404).json({ ok: false, error: "Search not found" });
            }

            return res.status(200).json({ ok: true, results});
        } catch (err) {
            return res.status(400).json({ error: "Server error" });
        }
    }

    async showMoviesForHome(req, res) {
        try {
            const sql = "SELECT * FROM movies WHERE id < 7";
            const [results] = await connection.query(sql);
            return res.status(404).json(results);
        } catch (err) {
            return res.status(404).json({ error: "Server error" });
        }
    }
    
    async showFavorites(req, res) {
        try {
            const { id } = req.user
            const sql = "SELECT movieId FROM favorites WHERE userId = ?";
            const [results] = await connection.query(sql, id);
            return res.status(200).json(results);
        } catch (err) {
            return res.status(404).json({ error: "Server error" });
        }
    }

    async addFavorite(req, res) {
        try {
            const { id } = req.user
            const { movieId } = req.body
            const sql = "INSERT INTO favorites (userId, movieId) VALUES (?, ?)"
            const [results] = await connection.query(sql, [id, movieId])
            return res.status(200).json({ results, alertMessage: "Movie added to favorites" })
        } catch (err) {
            return res.status(400).json({ error: "Server error" })
        }
    }

    async removeFavorite(req, res) {
        try {
            const { id } = req.user
            const { movieId } = req.body
            const sql = "DELETE FROM favorites WHERE userId = ? and movieId = ?"
            const [results] = await connection.query(sql, [id, movieId])
            return res.status(200).json({ results, alertMessage: "Movie removed from favorites" })
        } catch (err) {
            return res.status(400).json({ error: "Server error" })
        }
    }
}

export default new MoviesControllers();
