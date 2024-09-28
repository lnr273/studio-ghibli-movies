import { Router } from "express";
import MoviesControllers from "../controllers/MoviesControllers.js";
import { isLoggedIn } from "../../middleware/login.js";

const moviesRouter = Router();

moviesRouter.get("/movies", MoviesControllers.showAllMovies);
moviesRouter.get("/movies/:id", MoviesControllers.showMovieById);
moviesRouter.get("/genre/:id", MoviesControllers.showMoviesByGenre);
moviesRouter.get("/search/:s", MoviesControllers.searchMovies);
moviesRouter.get("/movies-for-home", MoviesControllers.showMoviesForHome);
moviesRouter.get("/favorites/:id", MoviesControllers.showFavorites);
moviesRouter.post("/favorites/:id", MoviesControllers.addFavorite);
moviesRouter.delete("/favorites/:id", MoviesControllers.removeFavorite);

export default moviesRouter;
