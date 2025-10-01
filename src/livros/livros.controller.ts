import { Controller, Get, Query } from '@nestjs/common';
import { LivrosService } from './livros.service';

@Controller('livros-home')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Get()
  getLivros(@Query('category') category: string) {
    return this.livrosService.findByCategory(category);
  }
}
