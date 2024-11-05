import { Controller, Get, Param } from '@nestjs/common';
import { FolhaPagamentoService } from './folha-pagamento.service';

@Controller('folha-pagamento')
export class FolhaPagamentoController {
  constructor(private readonly folhaPagamentoService: FolhaPagamentoService) {}

  @Get(':idFuncionario')
  calcularFolhaPagamento(
    @Param('idFuncionario') idFuncionario: string,
  ): Promise<any> {
    return this.folhaPagamentoService.calcularFolhaPagamento(idFuncionario);
  }
}
