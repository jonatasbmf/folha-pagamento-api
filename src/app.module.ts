import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AutenticacaoModule } from './modulos/autenticacao/autenticacao.module';
import { AutorizacaoModule } from './modulos/autorizacao/autorizacao.module';
import { EmpresaModule } from './modulos/empresa/empresa.module';
import { FolhaPagamentoModule } from './modulos/folha-pagamento/folha-pagamento.module';
import { FuncionarioModule } from './modulos/funcionario/funcionario.module';
import { GrupoUsuarioModule } from './modulos/grupo-usuario/grupo-usuario.module';
import { GrupousuarioPermissaoModule } from './modulos/grupousuario_permissao/grupousuario_permissao.module';
import { InssModule } from './modulos/inss/inss.module';
import { IrrfModule } from './modulos/irrf/irrf.module';
import { PermissaoModule } from './modulos/permissao/permissao.module';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    EmpresaModule,
    PermissaoModule,
    GrupoUsuarioModule,
    GrupousuarioPermissaoModule,
    UsuarioModule,
    FuncionarioModule,
    InssModule,
    IrrfModule,
    FolhaPagamentoModule,
    AutenticacaoModule,
    AutorizacaoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
