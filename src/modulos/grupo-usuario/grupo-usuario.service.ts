import { Injectable } from '@nestjs/common';
import { CreateGrupoUsuarioDto } from './dto/create-grupo-usuario.dto';
import { UpdateGrupoUsuarioDto } from './dto/update-grupo-usuario.dto';
import { GrupoUsuario } from './entities/grupo-usuario.entity';
import { GrupoUsuarioRepositorio } from './grupo-usuario.repositorio';
import { GravarGrupoUsuarioAssociarPermissao } from './useCase/gravar-grupo-usuario-associar-permissao.usecase';

@Injectable()
export class GrupoUsuarioService {
  constructor(private readonly grupoUsuarioRepositorio: GrupoUsuarioRepositorio,
    private readonly gravarGrupoAssociarPermissaoCasoUso: GravarGrupoUsuarioAssociarPermissao
  ) { }

  async create(createGrupoUsuarioDto: CreateGrupoUsuarioDto) {
    return this.gravarGrupoAssociarPermissaoCasoUso.gravarNovoGrupoAssociarPermissoes(createGrupoUsuarioDto);
  }

  async findAll() {
    const gruposUsuarios = await this.grupoUsuarioRepositorio.findAll();

    const listaDeGruposDeUsuario: GrupoUsuario[] = gruposUsuarios.map((grupo) => {
      return {
        id: grupo.id,
        nome: grupo.nome,
        descricao: grupo.descricao,
        permissoes: grupo.grupoUsuarioPermissao.map((permissao) => permissao.permissaoId),
      };
    });

    return listaDeGruposDeUsuario;
  }

  async findOne(id: number) {
    const grupoUsuario = await this.grupoUsuarioRepositorio.findOne(id);

    const grupoUsuarioComPermissoes: GrupoUsuario = {
      id: grupoUsuario.id,
      nome: grupoUsuario.nome,
      descricao: grupoUsuario.descricao,
      permissoes: grupoUsuario.grupoUsuarioPermissao.map((permissao) => permissao.permissaoId)
    }

    return grupoUsuarioComPermissoes;
  }

  async update(id: number, updateGrupoUsuarioDto: UpdateGrupoUsuarioDto) {
    return this.gravarGrupoAssociarPermissaoCasoUso.atualizarGrupoAssociarPermissoes(id, updateGrupoUsuarioDto);
  }

  async remove(id: number) {
    return this.grupoUsuarioRepositorio.remove(id);
  }

  async buscarPorNome(nome: string) {
    const gruposUsuarios = await this.grupoUsuarioRepositorio.buscarPorNome(nome);

    const listaDeGruposDeUsuario: GrupoUsuario[] = gruposUsuarios.map((grupo) => {
      return {
        id: grupo.id,
        nome: grupo.nome,
        descricao: grupo.descricao,
        permissoes: grupo.grupoUsuarioPermissao.map((permissao) => permissao.permissaoId),
      };
    });

    return listaDeGruposDeUsuario;
  }
}
