import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class CreateUsuarioUseCase {
    constructor(private readonly prisma: PrismaService) { }

    async execute(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(createUsuarioDto.senha, salt);

        return this.prisma.usuario.create({
            data: {
                ...createUsuarioDto,
                salt,
                senha: hashedPassword,
            },
        });
    }
}