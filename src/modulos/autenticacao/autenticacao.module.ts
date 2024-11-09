import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { GrupoUsuarioModule } from '../grupo-usuario/grupo-usuario.module';
import { ValidaSenhaUsuarioUseCase } from '../usuario/userCase/validaSenhaUsuario.usecase';
import { UsuarioModule } from '../usuario/usuario.module';
import { AutenticacaoController } from './autenticacao.controller';
import { AutenticacaoService } from './autenticacao.service';

@Module({
  controllers: [AutenticacaoController],
  providers: [AutenticacaoService, ValidaSenhaUsuarioUseCase,],
  imports: [
    UsuarioModule,
    GrupoUsuarioModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get<string>('SEGREDO_JWT'),
          signOptions: { expiresIn: '40min' },
        };
      },
      inject: [ConfigService],
      global: true,
    }),
  ],
})
export class AutenticacaoModule { }
