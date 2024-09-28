import { Router } from "express";
import UsersControllers from "../controllers/UsersControllers.js";

const userRouter = Router();

userRouter.get("/users", UsersControllers.showAllUsers);
userRouter.get("/users/:id", UsersControllers.showUserById);

// REGISTER A NEW USER
userRouter.post("/register", UsersControllers.register);

// USER LOGIN
userRouter.post("/login", UsersControllers.login);

// DELETE ACCOUNT
userRouter.delete("/users/:id", UsersControllers.delete);

export default userRouter;
