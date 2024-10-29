import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ValidaSenhaUsuarioUseCase } from '../usuario/userCase/validaSenhaUsuario.usecase';
import { UsuarioModule } from '../usuario/usuario.module';
import { AutenticacaoController } from './autenticacao.controller';
import { AutenticacaoService } from './autenticacao.service';

@Module({
  controllers: [AutenticacaoController],
  providers: [AutenticacaoService, ValidaSenhaUsuarioUseCase],
  imports: [
    UsuarioModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get<string>('SEGREDO_JWT'),
          signOptions: { expiresIn: '72h' },
        };
      },
      inject: [ConfigService],
      global: true,
    }),
  ],
})
export class AutenticacaoModule { }
