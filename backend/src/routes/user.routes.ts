import { Router } from "express";
import { UserController } from "../app/controllers/UserController";

const userRoutes = (router: Router) => {
  router.post("/user", UserController.createUser);
};

export default userRoutes;
