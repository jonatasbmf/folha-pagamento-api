import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePermissaoDto } from './dto/create-permissao.dto';
import { UpdatePermissaoDto } from './dto/update-permissao.dto';

@Injectable()
export class PermissaoService {
  constructor(private readonly prisma: PrismaService) { }

  create(createPermissaoDto: CreatePermissaoDto) {
    return this.prisma.permissao.create(
      {
        data: createPermissaoDto
      }
    );
  }

  findAll() {
    return this.prisma.permissao.findMany();
  }

  findOne(id: number) {
    return this.prisma.permissao.findUnique({
      where: { id }
    })
  }

  update(id: number, updatePermissaoDto: UpdatePermissaoDto) {
    return this.prisma.permissao.update({
      where: { id },
      data: updatePermissaoDto
    });
  }

  remove(id: number) {
    return this.prisma.permissao.delete({
      where: { id }
    });
  }

  findPorNome(nome: string) {
    return this.prisma.permissao.findFirst({
      where: { nome }
    });
  }
}
