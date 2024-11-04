import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AutenticacaoModule } from './modulos/autenticacao/autenticacao.module';
import { EmpresaModule } from './modulos/empresa/empresa.module';
import { FolhaPagamentoModule } from './modulos/folha-pagamento/folha-pagamento.module';
import { FuncionarioModule } from './modulos/funcionario/funcionario.module';
import { InssModule } from './modulos/inss/inss.module';
import { IrrfModule } from './modulos/irrf/irrf.module';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, EmpresaModule,
    FuncionarioModule, UsuarioModule, InssModule, IrrfModule,
    FolhaPagamentoModule, AutenticacaoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
