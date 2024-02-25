import { Router } from "express";
import { UserController } from "../app/controllers/UserController";
import { verifyToken } from "../middlewares/auth";
//import { checkAuthorization } from "../middlewares/permission";

const userRoutes = (router: Router) => {
  router.post("/user", UserController.createUser);
  router.get("/user", /*checkAuthorization(true)*/ verifyToken, UserController.getAllUsers);
  router.get("/user/:id", /*checkAuthorization(true)*/ verifyToken, UserController.getUserById);
  router.put("/user/:id", /*checkAuthorization(true)*/ verifyToken, UserController.updateUser);
  router.delete("/user/:id", /*checkAuthorization(true)*/ verifyToken, UserController.deleteUser);
};

export default userRoutes;
