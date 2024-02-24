import { authenticate } from "../app/controllers/AuthController";
import { Router } from "express";

const authRoutes = (router: Router) => {
  router.post("/login", authenticate);
};

export default authRoutes;