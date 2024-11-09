import { Injectable } from '@nestjs/common';
import { CreateGrupousuarioPermissaoDto } from 'src/modulos/grupousuario_permissao/dto/create-grupousuario_permissao.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGrupoUsuarioDto } from '../dto/create-grupo-usuario.dto';
import { UpdateGrupoUsuarioDto } from '../dto/update-grupo-usuario.dto';

@Injectable()
export class GravarGrupoUsuarioAssociarPermissao {
    constructor(private readonly prisma: PrismaService) { }

    async gravarNovoGrupoAssociarPermissoes(grupoUsuarioDto: CreateGrupoUsuarioDto) {
        try {
            const grupoUsario: CreateGrupoUsuarioDto = {
                nome: grupoUsuarioDto.nome,
                descricao: grupoUsuarioDto.descricao
            }
            const grupoNovo = await this.prisma.grupoUsuario.create({ data: grupoUsario });

            if (grupoUsuarioDto.permissoes !== undefined && grupoUsuarioDto.permissoes.length > 0) {

                grupoUsuarioDto.permissoes.map(async (permissao) => {
                    var grupo_usuario_permissao: CreateGrupousuarioPermissaoDto = {
                        grupoUsuarioId: grupoNovo.id,
                        permissaoId: permissao
                    }

                    await this.prisma.grupoUsuarioPermissao.create({
                        data: grupo_usuario_permissao
                    })
                });
            }
        } catch (err) {
            console.error(err);
        }
    }

    async atualizarGrupoAssociarPermissoes(id: number, grupoUsuarioDto: UpdateGrupoUsuarioDto) {
        const permisoes = grupoUsuarioDto.permissoes;

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
                grupoUsuarioId: id
            }
        });

        try {
            if (permisoes !== undefined && permisoes.length > 0) {
                permisoes.map(async (permissao) => {

                    var grupo_usuario_permissao: CreateGrupousuarioPermissaoDto = {
                        grupoUsuarioId: grupoAtualizado.id,
                        permissaoId: permissao
                    }

                    await this.prisma.grupoUsuarioPermissao.create({
                        data: grupo_usuario_permissao
                    })
                });

            }
        } catch (err) {
            console.error(err)
        }
    }
}

