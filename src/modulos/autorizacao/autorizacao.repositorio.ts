import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AutorizacaoRepositorio {
    constructor(private readonly prisma: PrismaService) { }

    async usarioPossuiPermissao(email: string, permissao: string): Promise<boolean> {
        const resultado = await this.prisma.usuario.count({
            where: {
                email: email,
                grupoUsuario: {
                    grupoUsuarioPermissao: {
                        some: {
                            permissao: { nome: permissao }
                        }
                    }
                }
            }
        });

        return resultado && resultado > 0;
    }
}
