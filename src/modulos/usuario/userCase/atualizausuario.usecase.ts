import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UpdateUsuarioUseCase {
    constructor(private readonly prisma: PrismaService) { }

    async execute(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
        const data: any = { ...updateUsuarioDto };

        if (updateUsuarioDto.senha) {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(updateUsuarioDto.senha, salt);
            data.senha = hashedPassword;
            data.salt = salt;
        }

        return this.prisma.usuario.update({
            where: { id },
            data,
        });
    }
}