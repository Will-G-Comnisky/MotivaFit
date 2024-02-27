import { authenticate, logout } from "../app/controllers/AuthController";
import { Router } from "express";

const authRoutes = (router: Router) => {
  router.post("/login", authenticate);
  router.post('/logout', logout);
};

export default authRoutes;