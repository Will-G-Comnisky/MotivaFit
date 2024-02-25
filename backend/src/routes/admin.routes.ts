import { Router } from "express";
import { AdminController } from "../app/controllers/AdminController";
import { verifyToken } from "../middlewares/auth";
//import { checkAuthorization } from "../middlewares/permission";

const adminRoutes = (router: Router) => {
  router.post("/admin", AdminController.createAdmin);
  router.get("/admin", /*checkAuthorization(true)*/ verifyToken, AdminController.getAllAdmins);
  router.get("/admin/:id", verifyToken, AdminController.getAdminById);
  router.put("/admin/:id", verifyToken, AdminController.updateAdmin);
  router.delete("/admin/:id", verifyToken, AdminController.deleteAdmin);
};

export default adminRoutes;
