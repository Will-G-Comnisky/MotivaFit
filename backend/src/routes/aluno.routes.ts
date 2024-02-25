import { Router } from "express";
import { AlunoController } from "../app/controllers/AlunoController";
import { verifyToken } from "../middlewares/auth";
import { checkAuthorization } from "../middlewares/permission";

const alunoRoutes = (router: Router) => {
  router.post("/aluno", AlunoController.createAluno);
  router.get("/aluno", verifyToken, AlunoController.getAllAlunos);
  router.get("/aluno/:id", verifyToken, AlunoController.getUserById);
  router.put("/aluno/:id", verifyToken, AlunoController.updateAluno);
  router.delete("/aluno/:id", verifyToken, AlunoController.deleteAluno);
};

export default alunoRoutes;
