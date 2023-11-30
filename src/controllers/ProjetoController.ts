import { Request, Response } from 'express';
import ProjetoModel from '../models/ProjetoModel';

class ProjetoController {
  static async create(req: Request, res: Response) {
    try {
      const { nomeProjeto, descricao, idEstande, idEquipe } = req.body;
      const projeto = await ProjetoModel.create(nomeProjeto, descricao, idEstande, idEquipe);
      res.status(201).json(projeto);
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const projetos = await ProjetoModel.getAll();
      res.status(200).json(projetos);
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const projeto = await ProjetoModel.getById(parseInt(id, 10));
      if (projeto) {
        res.status(200).json(projeto);
      } else {
        res.status(404).json({ error: 'Projeto não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

export default ProjetoController;
