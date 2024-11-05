import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Injectable()
export class FuncionarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFuncionarioDto: CreateFuncionarioDto) {
    return this.prisma.funcionario.create({
      data: createFuncionarioDto,
    });
  }

  async findAll() {
    return this.prisma.funcionario.findMany({
      include: { empresa: true },
    });
  }

  async findByName(nome: string) {
    return await this.prisma.funcionario.findMany({
      where: {
        nome: {
          contains: nome,
          mode: 'insensitive',
        },
      },
      include: { empresa: true },
    });
  }

  async findById(id: number) {
    return this.prisma.funcionario.findUnique({
      where: { id },
      include: { empresa: true },
    });
  }

  async update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.prisma.funcionario.update({
      where: { id },
      data: updateFuncionarioDto,
    });
  }

  async remove(id: number) {
    return this.prisma.funcionario.delete({
      where: { id },
    });
  }
}
