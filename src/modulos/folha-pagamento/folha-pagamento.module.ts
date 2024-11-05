import { Module } from '@nestjs/common';
import { FuncionarioModule } from 'src/modulos/funcionario/funcionario.module';
import { FolhaPagamentoController } from './folha-pagamento.controller';
import { FolhaPagamentoService } from './folha-pagamento.service';
import { CalcularINSSUseCase } from './userCase/calcularINSS.usercase';
import { CalcularIRRFUseCase } from './userCase/calcularIRRF.usercase';

@Module({
  controllers: [FolhaPagamentoController],
  providers: [FolhaPagamentoService, CalcularIRRFUseCase, CalcularINSSUseCase],
  imports: [FuncionarioModule],
})
export class FolhaPagamentoModule {}
