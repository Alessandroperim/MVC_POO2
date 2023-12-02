// routes/avaliacaoRoutes.ts
import express, { Request, Response } from 'express';
import AvaliacaoController from '../controllers/AvaliacaoController';

const router = express.Router();

router.post('/', AvaliacaoController.create);
router.get('/', AvaliacaoController.getAll);
router.get('/:id', AvaliacaoController.getById);

export default router;
