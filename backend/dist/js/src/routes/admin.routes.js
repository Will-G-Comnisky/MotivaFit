"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdminController_1 = require("../app/controllers/AdminController");
const adminRoutes = (router) => {
    router.post("/admin", AdminController_1.AdminController.createAdmin);
    router.get("/admin", AdminController_1.AdminController.getAllAdmins);
    router.get("/admin/:id", AdminController_1.AdminController.getAdminById);
    router.put("/admin/:id", AdminController_1.AdminController.updateAdmin);
    router.delete("/admin/:id", AdminController_1.AdminController.deleteAdmin);
};
exports.default = adminRoutes;
