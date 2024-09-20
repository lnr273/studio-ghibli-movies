import { Router } from "express";
import BannerControllers from "../controllers/BannerControllers.js";

const bannerRouter = Router();

bannerRouter.get("/banner/:name", BannerControllers.showBanner);

export default bannerRouter;
