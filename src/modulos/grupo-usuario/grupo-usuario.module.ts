import { Module } from '@nestjs/common';
import { GrupoUsuarioController } from './grupo-usuario.controller';
import { GrupoUsuarioRepositorio } from './grupo-usuario.repositorio';
import { GrupoUsuarioService } from './grupo-usuario.service';
import { GravarGrupoUsuarioAssociarPermissao } from './useCase/gravar-grupo-usuario-associar-permissao.usecase';

@Module({
  controllers: [GrupoUsuarioController],
  providers: [GrupoUsuarioService, GrupoUsuarioRepositorio, GravarGrupoUsuarioAssociarPermissao],
})
export class GrupoUsuarioModule { }
