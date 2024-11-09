import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CalcularIRRFUseCase {
  constructor(private readonly prisma: PrismaService) { }

  async calcularIRRF(salario: number, inss: number, dedusaoIrrf: number, ano: number,): Promise<number> {
    if (inss < 564.8)
      inss = 564.8;

    const baseCalculo = salario - inss - dedusaoIrrf;
    const aliquotas = await this.prisma.aliquotasIrrf.findMany({ where: { ano }, });

    let irrf = 0;

    for (const aliquota of aliquotas) {
      const faixaMax = Number(aliquota.faixaMax);
      const faixaMin = Number(aliquota.faixaMin);
      const aliquotaPercentual = Number(aliquota.aliquota) / 100;
      const deducao = Number(aliquota.deducao);

      if ((baseCalculo >= faixaMin && baseCalculo <= faixaMax) || (baseCalculo >= faixaMin && (faixaMax === undefined || faixaMax === 0))) {
        irrf = baseCalculo * (aliquotaPercentual) - deducao;
      }
    }

    return Math.max(irrf, 0);
  }
}
