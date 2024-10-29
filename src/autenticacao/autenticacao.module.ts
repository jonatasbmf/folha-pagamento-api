import { Module } from '@nestjs/common';
import { ValidaSenhaUsuarioUseCase } from 'src/usuario/userCase/validaSenhaUsuario.usecase';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AutenticacaoController } from './autenticacao.controller';
import { AutenticacaoService } from './autenticacao.service';

@Module({
  controllers: [AutenticacaoController],
  providers: [AutenticacaoService, ValidaSenhaUsuarioUseCase],
  imports: [UsuarioModule]
})
export class AutenticacaoModule { }
