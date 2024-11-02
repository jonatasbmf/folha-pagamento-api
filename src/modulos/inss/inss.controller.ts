import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

import { CreateInssDto } from './dto/create-inss.dto';
import { UpdateInssDto } from './dto/update-inss.dto';
import { InssService } from './inss.service';

@Controller('inss')
export class InssController {
  constructor(private readonly inssService: InssService) { }

  @Post()
  async create(@Body() createInssDto: CreateInssDto) {
    return await this.inssService.create(createInssDto);
  }

  @Get()
  async findAll() {
    return await this.inssService.findAll();
  }

  @Get('buscar/id/:id')
  async findOne(@Param('id') id: string) {
    return await this.inssService.findOne(+id);
  }

  @Get('buscar/ano')
  async findByYear(@Query('ano') ano: string) {
    return await this.inssService.findByYear(+ano);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateInssDto: UpdateInssDto) {
    return await this.inssService.update(+id, updateInssDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.inssService.remove(+id);
  }

  @Get('anos-distintos')
  async getDistinctYears() {
    return this.inssService.findDistinctYears();
  }
}
