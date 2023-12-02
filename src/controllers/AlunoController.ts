// controllers/AlunoController.ts
import { Request, Response } from 'express';
import AlunoModel from '../models/AlunoModel';

class AlunoController {
  static async create(req: Request, res: Response) {
    try {
      const { nomeAluno, matricula, idEquipe } = req.body;
      const aluno = await AlunoModel.create({ nomeAluno, matricula, idEquipe });
      res.status(201).json(aluno);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const alunos = await AlunoModel.getAll();
      res.status(200).json(alunos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const aluno = await AlunoModel.getById(parseInt(id, 10));
      if (aluno) {
        res.status(200).json(aluno);
      } else {
        res.status(404).json({ error: 'Aluno não encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

export default AlunoController;
