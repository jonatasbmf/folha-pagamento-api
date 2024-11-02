import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInssDto } from './dto/create-inss.dto';
import { UpdateInssDto } from './dto/update-inss.dto';

@Injectable()
export class InssService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createInssDto: CreateInssDto) {
    return await this.prisma.aliquotasInss.create({ data: createInssDto });
  }

  async findAll() {
    return await this.prisma.aliquotasInss.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.aliquotasInss.findUnique({ where: { id }, });
  }

  async findByYear(ano: number) {
    return await this.prisma.aliquotasInss.findMany({ where: { ano }, });
  }

  async update(id: number, updateInssDto: UpdateInssDto) {
    return await this.prisma.aliquotasInss.update({
      where: { id },
      data: updateInssDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.aliquotasInss.delete({
      where: { id },
    });
  }

  async findDistinctYears() {
    const result = await this.prisma.aliquotasInss.findMany({
      distinct: ['ano'],
      select: { ano: true },
    });
    return result;
  }
}
