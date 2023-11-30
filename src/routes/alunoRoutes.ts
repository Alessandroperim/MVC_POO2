// routes/alunoRoutes.ts
import express, { Request, Response } from 'express';
import AlunoController from '../controllers/AlunoController';

const router = express.Router();

router.post('/', AlunoController.create);
router.get('/', AlunoController.getAll);
router.get('/:id', AlunoController.getById);

export default router;
