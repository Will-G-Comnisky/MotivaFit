import { Router } from "express";
import { AvaliacoesController } from "../app/controllers/AvaliacoesController";
import { verifyToken } from "../middlewares/auth";
//import { authorize } from "../middlewares/permission";

const avaliacaoRoutes = (router: Router) => {
  router.post("/avaliacao", verifyToken, AvaliacoesController.createAvaliacao);
  router.get("/avaliacao", verifyToken, AvaliacoesController.getAllAvaliacoes);
  router.get("/avaliacao/:id", verifyToken, AvaliacoesController.getAvaliacoById);
  router.put("/avaliacao/:id", verifyToken, AvaliacoesController.updateAvaliacao);
  router.delete("/avaliacao/:id", verifyToken, AvaliacoesController.deleteAvaliacao);
};

export default avaliacaoRoutes;
