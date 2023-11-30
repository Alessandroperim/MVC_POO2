// models/AlunoModel.ts
import { PrismaClient, AlunoCreateInput, Aluno } from '@prisma/client';

const prisma = new PrismaClient();

interface CreateAlunoData {
  nomeAluno: string;
  matricula: string;
  idEquipe: number;
}

class AlunoModel {
  static async create(data: CreateAlunoData): Promise<Aluno> {
    const { nomeAluno, matricula, idEquipe } = data;

    return prisma.aluno.create({
      data: {
        nomeAluno,
        matricula,
        idEquipe,
      },
    });
  }

  static async getAll(): Promise<Aluno[]> {
    return prisma.aluno.findMany();
  }

  static async getById(id: number): Promise<Aluno | null> {
    return prisma.aluno.findUnique({
      where: {
        idAluno: id,
      },
    });
  }
}

export default AlunoModel;
