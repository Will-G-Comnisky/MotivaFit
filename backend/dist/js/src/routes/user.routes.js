"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("../app/controllers/UserController");
const userRoutes = (router) => {
    router.post("/user", UserController_1.UserController.createUser);
    router.get("/user", UserController_1.UserController.getAllUsers);
    router.get("/user/:id", UserController_1.UserController.getUserById);
    router.put("/user/:id", UserController_1.UserController.updateUser);
    router.delete("/user/:id", UserController_1.UserController.deleteUser);
};
exports.default = userRoutes;
