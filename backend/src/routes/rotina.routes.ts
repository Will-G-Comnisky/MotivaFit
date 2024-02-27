import { Router } from "express";
import { RotinaTreinoController } from "../app/controllers/RotinaTreinoController";

const rotinaTreinoRoutes = (router: Router) => {
  // Exercicios
  router.get("/exercicios", RotinaTreinoController.getExercicios);
  router.get("/exercicio/:id", RotinaTreinoController.getExercicio);
  
  // Treinos
  router.get("/treinos", RotinaTreinoController.getTreinos);
  router.get("/treinos/:id", RotinaTreinoController.getTreinoById);
  router.post("/treino", RotinaTreinoController.createRotina);
  router.put("/treino/:id", RotinaTreinoController.putTreino);
  router.delete("/treino/:id", RotinaTreinoController.deleteTreino);

  // Rotinas
  router.get("/rotinas", RotinaTreinoController.getRotina);
  router.get("/rotina/:id", RotinaTreinoController.getRotinaById);
  router.post("/rotina/:id", RotinaTreinoController.createRotina);
  router.put("/rotina/:id", RotinaTreinoController.putRotina);
  router.delete("/rotina/:id", RotinaTreinoController.deleteRotina);
}

export default rotinaTreinoRoutes;