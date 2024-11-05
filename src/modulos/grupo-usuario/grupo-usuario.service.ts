import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGrupoUsuarioDto } from './dto/create-grupo-usuario.dto';
import { UpdateGrupoUsuarioDto } from './dto/update-grupo-usuario.dto';

@Injectable()
export class GrupoUsuarioService {
  constructor(private readonly prisma: PrismaService) { }

  create(createGrupoUsuarioDto: CreateGrupoUsuarioDto) {
    return this.prisma.grupoUsuario.create({
      data: createGrupoUsuarioDto
    });
  }

  findAll() {
    return this.prisma.grupoUsuario.findMany();
  }

  findOne(id: number) {
    return this.prisma.grupoUsuario.findUnique({
      where: { id }
    });
  }

  update(id: number, updateGrupoUsuarioDto: UpdateGrupoUsuarioDto) {
    return this.prisma.grupoUsuario.update({
      where: { id },
      data: updateGrupoUsuarioDto
    });
  }

  remove(id: number) {
    return this.prisma.grupoUsuario.delete({
      where: { id }
    })
  }

  buscarPorNome(nome: string) {
    return this.prisma.grupoUsuario.findFirst({
      where: { nome }
    });
  }
}
