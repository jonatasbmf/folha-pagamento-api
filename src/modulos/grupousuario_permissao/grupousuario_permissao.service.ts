import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGrupousuarioPermissaoDto } from './dto/create-grupousuario_permissao.dto';
import { UpdateGrupousuarioPermissaoDto } from './dto/update-grupousuario_permissao.dto';

@Injectable()
export class GrupousuarioPermissaoService {
  constructor(private readonly prisma: PrismaService) {}

  create(createGrupousuarioPermissaoDto: CreateGrupousuarioPermissaoDto) {
    return this.prisma.grupoUsuarioPermissao.create({
      data: createGrupousuarioPermissaoDto,
    });
  }

  findAll() {
    return this.prisma.grupoUsuarioPermissao.findMany();
  }

  findOne(id: number) {
    return this.prisma.grupoUsuarioPermissao.findUnique({ where: { id } });
  }

  update(
    id: number,
    updateGrupousuarioPermissaoDto: UpdateGrupousuarioPermissaoDto,
  ) {
    return this.prisma.grupoUsuarioPermissao.update({
      where: { id },
      data: updateGrupousuarioPermissaoDto,
    });
  }

  remove(id: number) {
    return this.prisma.grupoUsuarioPermissao.delete({ where: { id } });
  }
}
