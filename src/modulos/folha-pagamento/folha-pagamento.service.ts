import { Injectable } from '@nestjs/common';
import { FuncionarioService } from 'src/modulos/funcionario/funcionario.service';
import { CalcularINSSUseCase } from './userCase/calcularINSS.usercase';
import { CalcularIRRFUseCase } from './userCase/calcularIRRF.usercase';

@Injectable()
export class FolhaPagamentoService {

    constructor(private readonly funcionarioService: FuncionarioService,
        private readonly calcularIRRFUseCase: CalcularIRRFUseCase,
        private readonly calcularINSSUseCase: CalcularINSSUseCase
    ) { }

    async calcularFolhaPagamento(idFuncionario: string) {
        var funcionario = await this.funcionarioService.findById(+idFuncionario);
        var salario = +funcionario.salario;
        var nome = funcionario.nome;

        var inss = await this.calcularInss(salario);
        var irrf = await this.calcularIrrf(+salario, +inss);

        return { nome, salario, inss, irrf };
    }

    async calcularInss(salario: number) {
        return this.calcularINSSUseCase.calcularINSS(salario, new Date().getFullYear());
    }

    async calcularIrrf(salario: number, inss: number) {
        return this.calcularIRRFUseCase.calcularIRRF(salario, inss, new Date().getFullYear());
    }
}
