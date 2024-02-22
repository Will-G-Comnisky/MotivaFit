import { Router } from "express";
import { UserController } from "../app/controllers/UserController";

const userRoutes = (router: Router) => {
  router.post("/user", UserController.createUser);
  router.get("/user", UserController.getAllUsers);
  router.get("/user/:id", UserController.getUserById);
  router.put("/user/:id", UserController.updateUser);
  router.delete("/user/:id", UserController.deleteUser);
};

export default userRoutes;
