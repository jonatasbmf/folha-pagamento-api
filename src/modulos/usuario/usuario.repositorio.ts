import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioRepositorio {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async create(usuarioNovo: UsuarioDto) {
        return this.prisma.usuario.create({
            data: usuarioNovo
        });
    }

    async findAll(): Promise<Usuario[]> {
        return this.prisma.usuario.findMany();
    }

    async findOne(id: number) {
        return this.prisma.usuario.findUnique({
            where: { id },
        });
    }

    async findForEmail(email: string) {
        return this.prisma.usuario.findUnique({
            where: { email },
        });
    }

    async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
        return this.prisma.usuario.update({
            where: { id },
            data: updateUsuarioDto
        });
    }

    async remove(id: number) {
        return this.prisma.usuario.delete({
            where: { id },
        });
    }

    async listarPorNome(nome: string) {
        return this.prisma.usuario.findMany({
            where: {
                name: {
                    contains: nome,
                    mode: 'insensitive',
                }
            }
        });
    }
}
