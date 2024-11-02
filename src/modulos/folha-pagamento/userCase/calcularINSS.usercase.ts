import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CalcularINSSUseCase {
    constructor(private readonly prisma: PrismaService) { }

    async calcularINSS(salario: number, ano: number): Promise<number> {
        const aliquotas = await this.prisma.aliquotasInss.findMany({ where: { ano } });
        let inss = 0;
        for (const aliquota of aliquotas) {
            if (salario > +aliquota.faixaMax) {
                inss += (+aliquota.faixaMax - +aliquota.faixaMin) * (+aliquota.aliquota / 100);
            } else {
                inss += (salario - +aliquota.faixaMin) * (+aliquota.aliquota / 100);
                break;
            }
        }
        return inss;
    }
}