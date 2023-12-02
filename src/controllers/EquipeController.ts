// controllers/EquipeController.ts
import { Request, Response } from 'express';
import EquipeModel from '../models/EquipeModel';

class EquipeController {
  static async create(req: Request, res: Response) {
    try {
      const equipe = await EquipeModel.create();
      res.status(201).json(equipe);
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const equipes = await EquipeModel.getAll();
      res.status(200).json(equipes);
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const equipe = await EquipeModel.getById(parseInt(id, 10));
      if (equipe) {
        res.status(200).json(equipe);
      } else {
        res.status(404).json({ error: 'Equipe não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

export default EquipeController;
