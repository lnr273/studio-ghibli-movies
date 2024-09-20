import express from "express";
import cors from 'cors';
import userRouter from "./routes/users.js";
import moviesRouter from "./routes/movies.js";
import bannerRouter from "./routes/banner.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(moviesRouter);
app.use(bannerRouter);

export default app;
