import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIrrfDto } from './dto/create-irrf.dto';
import { UpdateIrrfDto } from './dto/update-irrf.dto';

@Injectable()
export class IrrfService {
  constructor(private readonly prisma: PrismaService) {}

  async findByYear(ano: number) {
    return await this.prisma.aliquotasIrrf.findMany({
      where: { ano },
    });
  }

  async findDistinctYears() {
    const result = await this.prisma.aliquotasIrrf.findMany({
      distinct: ['ano'],
      select: { ano: true },
    });
    return result;
  }

  async create(createIrrfDto: CreateIrrfDto) {
    return await this.prisma.aliquotasIrrf.create({
      data: createIrrfDto,
    });
  }

  async findAll() {
    return await this.prisma.aliquotasIrrf.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.aliquotasIrrf.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateIrrfDto: UpdateIrrfDto) {
    return await this.prisma.aliquotasIrrf.update({
      where: { id },
      data: updateIrrfDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.aliquotasIrrf.delete({
      where: { id },
    });
  }
}
