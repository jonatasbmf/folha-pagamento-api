import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CalcularIRRFUseCase {
    constructor(private readonly prisma: PrismaService) { }

    async calcularIRRF(salario: number, inss: number, ano: number): Promise<number> {
        const baseCalculo = salario - inss;
        const aliquotas = await this.prisma.aliquotasIrrf.findMany({ where: { ano } });

        let irrf = 0;

        for (const aliquota of aliquotas) {
            const faixaMax = Number(aliquota.faixa_max);
            const faixaMin = Number(aliquota.faixa_min);
            const aliquotaPercentual = Number(aliquota.aliquota) / 100;
            const deducao = Number(aliquota.deducao);

            if ((baseCalculo >= faixaMin && baseCalculo <= faixaMax) || (baseCalculo >= faixaMin && faixaMax === 0)) {
                irrf = baseCalculo * aliquotaPercentual - deducao;
                break;
            }
        }

        // Garantir que o IRRF não seja negativo
        return Math.max(irrf, 0);
    }
}