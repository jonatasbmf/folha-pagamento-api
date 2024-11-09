import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CalcularINSSUseCase {
  constructor(private readonly prisma: PrismaService) { }

  async calcularINSS(salario: number, ano: number): Promise<number> {
    const aliquotas = await this.prisma.aliquotasInss.findMany({ where: { ano }, });

    let inss = 0;

    for (const aliquota of aliquotas) {

      if (salario >= +aliquota.faixaMin && salario <= +aliquota.faixaMax) {
        inss = salario * (+aliquota.aliquota / 100) - +aliquota.deducao;
        break;
      }
      else if (salario > +aliquota.faixaMax && aliquota === aliquotas[aliquotas.length - 1]) {
        // Caso o salário seja superior ao teto da última faixa, aplica a maior alíquota
        inss = salario * (+aliquota.aliquota / 100) - +aliquota.deducao;
      }

    }

    return Math.min(inss, 908.85);
  }
}
