import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { FuncionarioService } from './funcionario.service';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Post()
  async create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
    return await this.funcionarioService.create(createFuncionarioDto);
  }

  @Get('buscar/nome')
  async findByName(@Query('nome') nome: string) {
    return await this.funcionarioService.findByName(nome);
  }

  @Get('buscar/id/:id')
  async findOne(@Param('id') id: string) {
    return await this.funcionarioService.findById(+id);
  }

  @Get()
  async findAll() {
    return await this.funcionarioService.findAll();
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFuncionarioDto: UpdateFuncionarioDto,
  ) {
    return await this.funcionarioService.update(+id, updateFuncionarioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.funcionarioService.remove(+id);
  }
}
