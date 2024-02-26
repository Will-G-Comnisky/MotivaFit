import { Router } from "express";
import { AdminController } from "../app/controllers/AdminController";

const adminRoutes = (router: Router) => {
  router.post("/admin", AdminController.createAdmin);
  router.get("/admin", AdminController.getAllAdmins);
  router.get("/admin/:id", AdminController.getAdminById);
  router.put("/admin/:id", AdminController.updateAdmin);
  router.delete("/admin/:id", AdminController.deleteAdmin);
};

export default adminRoutes;
