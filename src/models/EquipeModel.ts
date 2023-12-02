import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class EquipeModel {
  static async create() {
    return prisma.equipe.create({});
  }

  static async getAll() {
    return prisma.equipe.findMany();
  }

  static async getById(id: number) {
    return prisma.equipe.findUnique({
      where: {
        idEquipe: id,
      },
    });
  }
}

export default EquipeModel;
