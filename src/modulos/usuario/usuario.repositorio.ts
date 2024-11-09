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
            data: {
                nome: usuarioNovo.nome,
                email: usuarioNovo.email,
                senha: usuarioNovo.senha,
                salt: usuarioNovo.salt,
                grupoUsuario: {
                    connect: { id: usuarioNovo.grupoUsuarioId },
                }
            }
        });
    }

    async findAll(): Promise<Usuario[]> {
        return this.prisma.usuario.findMany({
            include: {
                grupoUsuario: true
            }
        });
    }

    async findOne(id: number) {
        return this.prisma.usuario.findUnique({
            where: { id },
            include: {
                grupoUsuario: true
            }
        });
    }

    async findForEmail(email: string) {
        return this.prisma.usuario.findUnique({
            where: { email },
            include: {
                grupoUsuario: true
            }
        });
    }

    async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
        return this.prisma.usuario.update({
            where: { id },
            data: {
                nome: updateUsuarioDto.nome,
                email: updateUsuarioDto.email,
                senha: updateUsuarioDto.senha,
                salt: updateUsuarioDto.salt,
                grupoUsuario: {
                    connect: { id: updateUsuarioDto.grupoUsuarioId },
                }
            }
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
                nome: {
                    contains: nome,
                    mode: 'insensitive',
                }
            },
            include: {
                grupoUsuario: true
            }
        });
    }
}
