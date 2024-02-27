import { Router } from "express";
import { UserController } from "../app/controllers/UserController";
import { verifyToken } from "../middlewares/auth";
//import { authorize } from "../middlewares/permission";

const userRoutes = (router: Router) => {
  router.post("/user", UserController.createUser);
  router.get("/user", verifyToken, UserController.getAllUsers);
  router.get("/user/:id", verifyToken, UserController.getUserById);
  router.put("/user/:id", verifyToken, UserController.updateUser);
  router.delete("/user/:id", verifyToken, UserController.deleteUser);
  router.get("/user/cpf/:cpf", verifyToken, UserController.getByCpf)
  router.get("/user/email/:email", verifyToken, UserController.getByEmail)
};

export default userRoutes;
