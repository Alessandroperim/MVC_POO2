import { Request, Response } from 'express';
import EstandeModel from '../models/EstandeModel';

class EstandeController {
  static async create(req: Request, res: Response) {
    try {
      const estande = await EstandeModel.create();
      res.status(201).json(estande);
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const estandes = await EstandeModel.getAll();
      res.status(200).json(estandes);
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const estande = await EstandeModel.getById(parseInt(id, 10));
      if (estande) {
        res.status(200).json(estande);
      } else {
        res.status(404).json({ error: 'Estande não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

export default EstandeController;
