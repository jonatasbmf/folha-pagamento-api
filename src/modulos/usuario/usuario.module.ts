import { Module } from '@nestjs/common';
import { UpdateUsuarioUseCase } from './userCase/atualizausuario.usecase';
import { CreateUsuarioUseCase } from './userCase/criarusuario.usecase';
import { ValidaSenhaUsuarioUseCase } from './userCase/validaSenhaUsuario.usecase';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepositorio } from './usuario.repositorio';
import { UsuarioService } from './usuario.service';

@Module({
  controllers: [UsuarioController],
  providers: [
    UsuarioRepositorio,
    UsuarioService,
    CreateUsuarioUseCase,
    UpdateUsuarioUseCase,
    ValidaSenhaUsuarioUseCase,
  ],
  exports: [UsuarioRepositorio],
})
export class UsuarioModule { }
