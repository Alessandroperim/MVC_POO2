import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class EstandeModel {
  static async create() {
    return prisma.estande.create({});
  }

  static async getAll() {
    return prisma.estande.findMany();
  }

  static async getById(id: number) {
    return prisma.estande.findUnique({
      where: {
        idEstande: id,
      },
    });
  }
}

export default EstandeModel;
