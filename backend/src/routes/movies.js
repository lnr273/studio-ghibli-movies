import { Router } from "express";
import MoviesControllers from "../controllers/MoviesControllers.js";
import { isLoggedIn } from "../../middleware/login.js";

const moviesRouter = Router();

moviesRouter.get("/movies", MoviesControllers.showAllMovies);
moviesRouter.get("/movies/:title", MoviesControllers.showMovieByTitle);
moviesRouter.get("/genre/:title", MoviesControllers.showMoviesByGenre);
moviesRouter.get("/search/:s", MoviesControllers.searchMovies);
moviesRouter.get("/movies-for-home", MoviesControllers.showMoviesForHome);
moviesRouter.get("/favorites", isLoggedIn, MoviesControllers.showFavorites);
moviesRouter.post("/favorites", isLoggedIn, MoviesControllers.addFavorite);
moviesRouter.delete("/favorites", isLoggedIn, MoviesControllers.removeFavorite);

export default moviesRouter;
