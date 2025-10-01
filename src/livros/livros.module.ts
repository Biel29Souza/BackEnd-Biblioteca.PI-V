import { Module } from '@nestjs/common';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';
import { PrismaModule } from 'src/conexao-prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LivrosController],
  providers: [LivrosService]
})
export class LivrosModule {}
