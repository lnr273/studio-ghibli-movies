import { Router } from "express";
import MoviesControllers from "../controllers/MoviesControllers.js";

const moviesRouter = Router();

moviesRouter.get("/movies", MoviesControllers.showAllMovies);
moviesRouter.get("/movies/:id", MoviesControllers.showMovieById);
moviesRouter.get("/genre/:id", MoviesControllers.showMoviesByGenre);
moviesRouter.get("/search/:s", MoviesControllers.searchMovies);
moviesRouter.get("/movies-for-home", MoviesControllers.showMoviesForHome);
moviesRouter.get("/favorites/:token", MoviesControllers.showFavorites);
moviesRouter.post("/favorites/:token", MoviesControllers.addFavorite);
moviesRouter.delete("/favorites/:token", MoviesControllers.removeFavorite);

export default moviesRouter;
