// routes/estandeRoutes.ts
import express, { Request, Response } from 'express';
import EstandeController from '../controllers/EstandeController';

const router = express.Router();

router.post('/', EstandeController.create);
router.get('/', EstandeController.getAll);
router.get('/:id', EstandeController.getById);

export default router;
