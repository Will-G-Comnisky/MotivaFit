"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlanoController_1 = require("../app/controllers/PlanoController");
const auth_1 = require("../middlewares/auth");
//import { authorize } from "../middlewares/permission";
const planoRoutes = (router) => {
    router.post("/plano", PlanoController_1.PlanoController.createPlano);
    router.get("/plano", auth_1.verifyToken, PlanoController_1.PlanoController.getAllPlanos);
    router.get("/plano/:id", auth_1.verifyToken, PlanoController_1.PlanoController.getPlanoById);
    router.put("/plano/:id", auth_1.verifyToken, PlanoController_1.PlanoController.updatePlano);
    router.delete("/plano/:id", auth_1.verifyToken, PlanoController_1.PlanoController.deletePlano);
};
exports.default = planoRoutes;
