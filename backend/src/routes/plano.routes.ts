import { Router } from "express";
import { PlanoController } from "../app/controllers/PlanoController";
import { verifyToken } from "../middlewares/auth";
//import { authorize } from "../middlewares/permission";

const planoRoutes = (router: Router) => {
  router.post("/plano", PlanoController.createPlano);
  router.get("/plano", verifyToken, PlanoController.getAllPlanos);
  router.get("/plano/:id", verifyToken, PlanoController.getPlanoById);
  router.put("/plano/:id", verifyToken, PlanoController.updatePlano);
  router.delete("/plano/:id", verifyToken, PlanoController.deletePlano);
};

export default planoRoutes;
