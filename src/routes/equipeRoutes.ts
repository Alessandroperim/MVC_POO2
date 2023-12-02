// routes/equipeRoutes.ts
import express, { Request, Response } from 'express';
import EquipeController from '../controllers/EquipeController';

const router = express.Router();

router.post('/', EquipeController.create);
router.get('/', EquipeController.getAll);
router.get('/:id', EquipeController.getById);

export default router;
