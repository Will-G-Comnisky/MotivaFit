import { Router } from "express";
import { UserController } from "../app/controllers/UserController";
import { verifyToken } from "../middlewares/auth";
import { authorize } from "../middlewares/permission";

const userRoutes = (router: Router) => {
  router.post("/user", UserController.createUser);
  router.get("/user", verifyToken, UserController.getAllUsers);
  router.get("/user/:id", verifyToken, authorize, UserController.getUserById);
  router.put("/user/:id", verifyToken, authorize, UserController.updateUser);
  router.delete("/user/:id", verifyToken, authorize, UserController.deleteUser);
};

export default userRoutes;
