import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGrupoUsuarioDto } from './dto/create-grupo-usuario.dto';
import { UpdateGrupoUsuarioDto } from './dto/update-grupo-usuario.dto';

@Injectable()
export class GrupoUsuarioRepositorio {
    constructor(private readonly prisma: PrismaService) { }

    async create(createGrupoUsuarioDto: CreateGrupoUsuarioDto) {
        return this.prisma.grupoUsuario.create({
            data: createGrupoUsuarioDto,
        });
    }

    async findAll() {
        return this.prisma.grupoUsuario.findMany({
            include: {
                grupoUsuarioPermissao: true
            }
        });
    }

    async findOne(id: number) {
        return this.prisma.grupoUsuario.findUnique({
            where: { id },
            include: {
                grupoUsuarioPermissao: true
            }
        });
    }

    async update(id: number, updateGrupoUsuarioDto: UpdateGrupoUsuarioDto) {
        return this.prisma.grupoUsuario.update({
            where: { id },
            data: updateGrupoUsuarioDto,
        });
    }

    async remove(id: number) {
        return this.prisma.grupoUsuario.delete({
            where: { id },
        });
    }

    async buscarPorNome(nome: string) {
        return this.prisma.grupoUsuario.findMany({
            where: {
                nome: {
                    contains: nome,
                    mode: 'insensitive',
                }
            },
            include: { grupoUsuarioPermissao: true }
        });
    }
}
