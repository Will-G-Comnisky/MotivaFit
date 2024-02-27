import { Router, Request, Response } from 'express';
import { ControllerExercicio } from './controllers/controllerExercicio';
import { ControllerTreino } from './controllers/controllerTreino';
import { ControllerRotina } from './controllers/controllerRotina';




const router = Router();
router.get("/", (req: Request, res: Response) => {
    return res.send('Welcome!')
});


// Exercicios
router.get("/exercicio/:id", ControllerExercicio.getExercicio);
router.get("/exercicios", ControllerExercicio.getExercicios);
router.post("/exercicio", ControllerExercicio.postExercicio);
router.put("/altexercicio", ControllerExercicio.putExercicio);
router.delete("/delexercicio/:id", ControllerExercicio.deleteExercicio);


// Treino
router.get ("/treino/:id", ControllerTreino.getTreino);
router.get("/treinos", ControllerTreino.getTreinos);
router.post("/treino", ControllerTreino.postTreino);
router.put("/alttreino", ControllerTreino.putTreino);
router.delete("/deltreino/:id", ControllerTreino.deleteTreino);


//Rotina

router.get("/rotina/:id", ControllerRotina.getRotina);
router.get("/rotinas", ControllerRotina.getRotinas);
router.post("/rotina", ControllerRotina.postRotina);
router.put("/altrotina", ControllerRotina.putRotina);
router.delete("/delrotina/:id", ControllerRotina.deleteRotina);

export default router;
