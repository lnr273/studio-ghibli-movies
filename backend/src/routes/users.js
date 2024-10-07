import { Router } from "express";
import UsersControllers from "../controllers/UsersControllers.js";

const userRouter = Router();

userRouter.get("/users", UsersControllers.showAllUsers);
userRouter.get("/users/:id", UsersControllers.showUserById);
// REGISTER A NEW USER
userRouter.post("/register", UsersControllers.register);
// USER LOGIN
userRouter.post("/login", UsersControllers.login);
// EDIT PROFILE
userRouter.patch("/edit/:id", UsersControllers.editProfile);
// CHANGE PASSWORD
userRouter.patch("/newpwd/:id", UsersControllers.changePassword);
// RESET PASSWORD
userRouter.post("/reset-password/:token", UsersControllers.resetPassword);
// FORGOT PASSWORD
userRouter.post("/forgot-password", UsersControllers.forgotPassword);
// DELETE ACCOUNT
userRouter.delete("/users/:id", UsersControllers.delete);

export default userRouter;
