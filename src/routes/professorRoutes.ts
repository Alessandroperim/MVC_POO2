// routes/professorRoutes.ts
import express, { Request, Response } from 'express';
import ProfessorController from '../controllers/ProfessorController';

const router = express.Router();

router.post('/', ProfessorController.create);
router.get('/', ProfessorController.getAll);
router.get('/:id', ProfessorController.getById);

export default router;
