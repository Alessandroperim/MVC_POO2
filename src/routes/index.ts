// routes/index.ts
import express from 'express';
import alunoRoutes from './alunoRoutes';  // Importe as rotas específicas aqui
import professorRoutes from './professorRoutes';
import equipeRoutes from './equipeRoutes';
import avaliacaoRoutes from './avaliacaoRoutes';
import projetoRoutes from './projetoRoutes';
import estandeRoutes from './estandeRoutes';

const router = express.Router();

router.use('/alunos', alunoRoutes);        // Use as rotas específicas aqui
router.use('/professores', professorRoutes);
router.use('/equipes', equipeRoutes);
router.use('/avaliacoes', avaliacaoRoutes);
router.use('/projetos', projetoRoutes);
router.use('/estandes', estandeRoutes);

export default router;
