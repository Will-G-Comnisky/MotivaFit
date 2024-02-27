"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthController_1 = require("../app/controllers/AuthController");
const authRoutes = (router) => {
    router.post("/login", AuthController_1.authenticate);
    router.post('/logout', AuthController_1.logout);
};
exports.default = authRoutes;
