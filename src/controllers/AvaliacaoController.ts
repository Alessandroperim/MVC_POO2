import { Request, Response } from 'express';
import AvaliacaoModel from '../models/AvaliacaoModel';

class AvaliacaoController {
  static async create(req: Request, res: Response) {
    try {
      const { avaliacaoAluno, avaliacaoProfessor, projetoAvaliadoId } = req.body;
      const avaliacao = await AvaliacaoModel.create(avaliacaoAluno, avaliacaoProfessor, projetoAvaliadoId);
      res.status(201).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const avaliacoes = await AvaliacaoModel.getAll();
      res.status(200).json(avaliacoes);
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const avaliacao = await AvaliacaoModel.getById(parseInt(id, 10));
      if (avaliacao) {
        res.status(200).json(avaliacao);
      } else {
        res.status(404).json({ error: 'Avaliação não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

export default AvaliacaoController;
