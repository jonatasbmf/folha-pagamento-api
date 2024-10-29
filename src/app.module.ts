import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { EmpresaModule } from './empresa/empresa.module';
import { FolhaPagamentoModule } from './folha-pagamento/folha-pagamento.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [PrismaModule, EmpresaModule,
    FuncionarioModule, UsuarioModule,
    FolhaPagamentoModule, AutenticacaoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),],
  controllers: [],
  providers: [],
})
export class AppModule { }
