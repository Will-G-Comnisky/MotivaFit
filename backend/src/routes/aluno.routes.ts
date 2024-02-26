import { Router } from "express";
import { AlunoController } from "../app/controllers/AlunoController";
import { verifyToken } from "../middlewares/auth";
import { authorize } from "../middlewares/permission";

const alunoRoutes = (router: Router) => {
  router.post("/aluno", AlunoController.createAluno);
  router.get("/aluno", verifyToken, authorize, AlunoController.getAllAlunos);
  router.get("/aluno/:id", verifyToken, authorize, AlunoController.getUserById);
  router.put("/aluno/:id", verifyToken, authorize, AlunoController.updateAluno);
  router.delete("/aluno/:id", verifyToken, authorize, AlunoController.deleteAluno);
};

export default alunoRoutes;
