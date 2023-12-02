// models/AlunoModel.ts
import { PrismaClient, Prisma, Aluno } from '@prisma/client';

const prisma = new PrismaClient();

interface CreateAlunoData {
  nomeAluno: string;
  matricula: string;
  idEquipe: number;
}

class AlunoModel {
  static async create(data: CreateAlunoData): Promise<Prisma.Aluno> {
    const { nomeAluno, matricula, idEquipe } = data;

    return prisma.aluno.create({
      data: {
        nomeAluno,
        matricula,
        Equipe: { connect: { idEquipe } },
      } as Prisma.AlunoCreateInput,
    });
  }

  static async getAll(): Promise<Prisma.Aluno[]> {
    return prisma.aluno.findMany();
  }

  static async getById(id: number): Promise<Prisma.Aluno | null> {
    return prisma.aluno.findUnique({
      where: {
        idAluno: id,
      },
    });
  }
}

export default AlunoModel;
