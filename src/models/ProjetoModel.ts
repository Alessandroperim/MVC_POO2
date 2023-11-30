import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ProjetoModel {
  static async create(nomeProjeto: string, descricao: string, idEstande: number, idEquipe: number) {
    return prisma.projeto.create({
      data: {
        nomeProjeto,
        descricao,
        idEstande,
        idEquipe,
      },
    });
  }

  static async getAll() {
    return prisma.projeto.findMany();
  }

  static async getById(id: number) {
    return prisma.projeto.findUnique({
      where: {
        idProjeto: id,
      },
    });
  }
}

export default ProjetoModel;
