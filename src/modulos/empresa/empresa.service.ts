import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresaService {
  constructor(private readonly prisma: PrismaService) { }

  async findByName(nome: string) {
    return this.prisma.empresa.findMany({
      where: {
        razao_social: {
          contains: nome,
          mode: 'insensitive',
        },
      },
    });
  }


  async create(createEmpresaDto: CreateEmpresaDto) {
    return this.prisma.empresa.create({
      data: createEmpresaDto,
    });
  }

  async findAll() {
    return this.prisma.empresa.findMany();
  }

  async findOne(id: number) {
    return this.prisma.empresa.findUnique({
      where: { id },
    });
  }

  async findOneWithStaff(id: number) {
    return this.prisma.empresa.findUnique({
      where: { id },
      include: { funcionarios: true }
    });
  }

  async update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return this.prisma.empresa.update({
      where: { id },
      data: updateEmpresaDto,
    });
  }

  async remove(id: number) {
    return this.prisma.empresa.delete({
      where: { id },
    });
  }
}