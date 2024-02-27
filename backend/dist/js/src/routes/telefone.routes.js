"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TelefoneController_1 = require("../app/controllers/TelefoneController");
const auth_1 = require("../middlewares/auth");
const telefoneRoutes = (router) => {
    router.post('/telefone', TelefoneController_1.TelefoneController.createTelefone);
    router.get('/telefone', auth_1.verifyToken, TelefoneController_1.TelefoneController.getAllTelefones);
    router.get('/telefone/:id', auth_1.verifyToken, TelefoneController_1.TelefoneController.getTelefoneById);
    router.put('/telefone/:id', auth_1.verifyToken, TelefoneController_1.TelefoneController.updateTelefone);
    router.delete('/telefone/:id', auth_1.verifyToken, TelefoneController_1.TelefoneController.deleteTelefone);
    router.get('/telefone/user/:userId', TelefoneController_1.TelefoneController.getTelefonesByUserId);
};
exports.default = telefoneRoutes;
