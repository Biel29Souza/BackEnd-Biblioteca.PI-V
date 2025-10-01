import { Injectable } from '@nestjs/common';
import { PrismaService } from '../conexao-prisma/prisma.service';

@Injectable()
export class LivrosService {
  constructor(private prisma: PrismaService) {}

  findByCategory(category: string) {
    return this.prisma.livros.findMany({ where: { category } });
  }
}
