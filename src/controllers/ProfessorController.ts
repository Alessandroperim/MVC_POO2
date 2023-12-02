import { Request, Response } from 'express';
import ProfessorModel from '../models/ProfessorModel';

class ProfessorController {
  static async create(req: Request, res: Response) {
    try {
      const { nomeProfessor } = req.body;
      const professor = await ProfessorModel.create(nomeProfessor);
      res.status(201).json(professor);
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const professores = await ProfessorModel.getAll();
      res.status(200).json(professores);
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const professor = await ProfessorModel.getById(parseInt(id, 10));
      if (professor) {
        res.status(200).json(professor);
      } else {
        res.status(404).json({ error: 'Professor não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

export default ProfessorController;
