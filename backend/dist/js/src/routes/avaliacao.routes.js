"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AvaliacoesController_1 = require("../app/controllers/AvaliacoesController");
const auth_1 = require("../middlewares/auth");
//import { authorize } from "../middlewares/permission";
const avaliacaoRoutes = (router) => {
    router.post("/avaliacao", auth_1.verifyToken, AvaliacoesController_1.AvaliacoesController.createAvaliacao);
    router.get("/avaliacao", auth_1.verifyToken, AvaliacoesController_1.AvaliacoesController.getAllAvaliacoes);
    router.get("/avaliacao/:id", auth_1.verifyToken, AvaliacoesController_1.AvaliacoesController.getAvaliacoById);
    router.put("/avaliacao/:id", auth_1.verifyToken, AvaliacoesController_1.AvaliacoesController.updateAvaliacao);
    router.delete("/avaliacao/:id", auth_1.verifyToken, AvaliacoesController_1.AvaliacoesController.deleteAvaliacao);
};
exports.default = avaliacaoRoutes;
