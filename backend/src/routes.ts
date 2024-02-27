import { Router, Request, Response } from 'express';
import { Controller } from './controllers/controller';




const router = Router();
router.get("/", (req: Request, res: Response) => {
    return res.send('Welcome!')
});



router.get("/exercicio/:id", Controller.getExercicio);

router.get("/exercicios", Controller.getExercicios);


router.get ("/treino/:id", Controller.getTreino);

router.post("/treino", Controller.postTreino);

router.put("/alttreino", Controller.putTreino);

router.delete("/deltreino/:id", Controller.deleteTreino);

//Rotina de treino

router.get("/rotina/:id", Controller.getRotina);

router.post("/rotina", Controller.postRotina);


export default router;
