import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { UpdateUsuarioUseCase } from './userCase/atualizausuario.usecase';
import { CreateUsuarioUseCase } from './userCase/criarusuario.usecase';

@Injectable()
export class UsuarioRepositorio {
    constructor(
        private readonly prisma: PrismaService,
        private readonly createUsuarioUseCase: CreateUsuarioUseCase,
        private readonly updateUsuarioUseCase: UpdateUsuarioUseCase,
    ) { }

    async create(createUsuarioDto: CreateUsuarioDto) {
        return this.createUsuarioUseCase.execute(createUsuarioDto);
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
        return this.updateUsuarioUseCase.execute(id, updateUsuarioDto);
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
