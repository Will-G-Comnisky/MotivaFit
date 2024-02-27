"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("../app/controllers/UserController");
const auth_1 = require("../middlewares/auth");
//import { authorize } from "../middlewares/permission";
const userRoutes = (router) => {
    router.post("/user", UserController_1.UserController.createUser);
    router.get("/user", auth_1.verifyToken, UserController_1.UserController.getAllUsers);
    router.get("/user/:id", auth_1.verifyToken, UserController_1.UserController.getUserById);
    router.put("/user/:id", auth_1.verifyToken, UserController_1.UserController.updateUser);
    router.delete("/user/:id", auth_1.verifyToken, UserController_1.UserController.deleteUser);
    router.get("/user/cpf/:cpf", auth_1.verifyToken, UserController_1.UserController.getByCpf);
    router.get("/user/email/:email", auth_1.verifyToken, UserController_1.UserController.getByEmail);
};
exports.default = userRoutes;
