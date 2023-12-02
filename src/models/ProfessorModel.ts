import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ProfessorModel {
  static async create(nomeProfessor: string) {
    return prisma.professor.create({
      data: {
        nomeProfessor,
      },
    });
  }

  static async getAll() {
    return prisma.professor.findMany();
  }

  static async getById(id: number) {
    return prisma.professor.findUnique({
      where: {
        idProfessor: id,
      },
    });
  }
}

export default ProfessorModel;
