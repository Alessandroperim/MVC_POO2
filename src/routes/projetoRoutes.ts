// routes/projetoRoutes.ts
import express, { Request, Response } from 'express';
import ProjetoController from '../controllers/ProjetoController';

const router = express.Router();

router.post('/', ProjetoController.create);
router.get('/', ProjetoController.getAll);
router.get('/:id', ProjetoController.getById);

export default router;
