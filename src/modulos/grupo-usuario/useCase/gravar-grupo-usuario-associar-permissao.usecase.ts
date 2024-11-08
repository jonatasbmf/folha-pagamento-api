import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGrupoUsuarioDto } from '../dto/create-grupo-usuario.dto';
import { UpdateGrupoUsuarioDto } from '../dto/update-grupo-usuario.dto';

@Injectable()
export class GravarGrupoUsuarioAssociarPermissao {
    constructor(private readonly prisma: PrismaService) { }

    async gravarNovoGrupoAssociarPermissoes(grupoUsuarioDto: CreateGrupoUsuarioDto) {
        const grupoUsuario = grupoUsuarioDto;
        const permisoes = grupoUsuarioDto.permissoes;

        const grupoNovo = await this.prisma.grupoUsuario.create({ data: grupoUsuario });
        if (permisoes !== undefined && permisoes.length > 0) {
            permisoes.map((permissao) => {
                this.prisma.grupoUsuarioPermissao.create(
                    {
                        data: {
                            permissaoId: permissao,
                            grupousuarioId: grupoNovo.id
                        }
                    }
                )
            });
        }
    }

    async atualizarGrupoAssociarPermissoes(id: number, grupoUsuarioDto: UpdateGrupoUsuarioDto) {
        const permisoes = grupoUsuarioDto.permissoes;

        console.warn(permisoes);

        const grupoAtualizado = await this.prisma.grupoUsuario.update({
            where: {
                id: grupoUsuarioDto.id,
            },
            data: {
                id: grupoUsuarioDto.id,
                nome: grupoUsuarioDto.nome,
                descricao: grupoUsuarioDto.descricao
            }
        });

        await this.prisma.grupoUsuarioPermissao.deleteMany({
            where: {
                grupousuarioId: id
            }
        });

        try {
            if (permisoes !== undefined && permisoes.length > 0) {
                permisoes.map((permissao) => {
                    this.prisma.grupoUsuarioPermissao.create(
                        {
                            data: {
                                permissaoId: permissao,
                                grupousuarioId: grupoAtualizado.id
                            }
                        }
                    )
                });

            }
        } catch (err) {
            console.error(err)
        }
    }
}

