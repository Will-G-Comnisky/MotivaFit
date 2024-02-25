"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controllers/controller");
const usercontroller_1 = require("./controllers/usercontroller");
const getUserById = usercontroller_1.UserController.getUserById;
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    return res.send('Welcome!');
});
router.get("/login", controller_1.Controller.getLogin);
router.get('/:id', getUserById);
router.get("/treino/:id", controller_1.Controller.getTreino);
exports.default = router;
