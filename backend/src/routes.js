import { Router } from "express";
import UsersControllers from "./controllers/UsersControllers.js";

const router = Router()

router.get("/users", UsersControllers.showAll)
router.get("/users/:id", UsersControllers.showById)
router.post("/users", UsersControllers.create)
router.put("/users/:id", UsersControllers.update)
router.delete("/users/:id", UsersControllers.delete)

export default router
