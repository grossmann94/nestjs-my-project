import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns the cat with id #${params.id}`;
  }
}
