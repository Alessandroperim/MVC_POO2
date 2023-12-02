import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AvaliacaoModel {
  static async create(avaliacaoAluno: number, avaliacaoProfessor: number, projetoAvaliadoId: number) {
    return prisma.avaliacao.create({
      data: {
        avaliacaoAluno,
        avaliacaoProfessor,
        projetoAvaliadoId,
      },
    });
  }

  static async getAll() {
    return prisma.avaliacao.findMany();
  }

  static async getById(id: number) {
    return prisma.avaliacao.findUnique({
      where: {
        idAvaliacao: id,
      },
    });
  }
}

export default AvaliacaoModel;
