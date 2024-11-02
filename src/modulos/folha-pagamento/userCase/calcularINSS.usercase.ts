import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CalcularINSSUseCase {
    constructor(private readonly prisma: PrismaService) { }

    async calcularINSS(salario: number, ano: number): Promise<number> {
        const aliquotas = await this.prisma.aliquotasInss.findMany({ where: { ano } });
        let inss = 0;
        for (const aliquota of aliquotas) {
            if (salario > +aliquota.faixa_max) {
                inss += (+aliquota.faixa_max - +aliquota.faixa_min) * (+aliquota.aliquota / 100);
            } else {
                inss += (salario - +aliquota.faixa_min) * (+aliquota.aliquota / 100);
                break;
            }
        }
        return inss;
    }
}