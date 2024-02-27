import { Router } from "express";
import { TelefoneController } from "../app/controllers/TelefoneController";
import { verifyToken } from "../middlewares/auth";

const telefoneRoutes = (router: Router) => {
  router.post('/telefone', TelefoneController.createTelefone);
  router.get('/telefone', verifyToken, TelefoneController.getAllTelefones);
  router.get('/telefone/:id', verifyToken, TelefoneController.getTelefoneById);
  router.put('/telefone/:id', verifyToken, TelefoneController.updateTelefone);
  router.delete('/telefone/:id', verifyToken, TelefoneController.deleteTelefone);
  router.get('/telefone/user/:userId', TelefoneController.getTelefonesByUserId);
};

export default telefoneRoutes;