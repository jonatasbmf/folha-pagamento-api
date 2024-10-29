import { Module } from '@nestjs/common';
import { EmpresaModule } from './empresa/empresa.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { FolhaPagamentoModule } from './folha-pagamento/folha-pagamento.module';

@Module({
  imports: [PrismaModule, EmpresaModule, FuncionarioModule, UsuarioModule, FolhaPagamentoModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
