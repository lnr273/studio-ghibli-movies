import { Router } from "express";
import UsersControllers from "./controllers/UsersControllers.js";

const router = Router()

router.get("/users", UsersControllers.showAll)
router.get("/users/:id", UsersControllers.showById)

// Create new user
router.post("/users", UsersControllers.create)

// User login
router.post("/login", UsersControllers.login)

// MOSTRA TODOS OS SALVOS
router.get("/favorites", UsersControllers.getFavorites)

// EXCLUIR CONTA
router.delete("/users/:id", UsersControllers.delete)

export default router
