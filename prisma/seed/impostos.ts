import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const existeDados = await prisma.aliquotasInss.findFirst();

    if (existeDados) {
        console.log("Já foram encontrados os dados, não é necessario o preenchimento!")
        return;
    }

    await prisma.aliquotasInss.createMany({
        data: [
            { ano: 2024, faixaMin: 0, faixaMax: 1320, aliquota: 7.5 },
            { ano: 2024, faixaMin: 1320.01, faixaMax: 2571.29, aliquota: 9 },
            { ano: 2024, faixaMin: 2571.30, faixaMax: 3856.94, aliquota: 12 },
            { ano: 2024, faixaMin: 3856.95, faixaMax: 7507.49, aliquota: 14 },
        ],
    });

    await prisma.aliquotasIrrf.createMany({
        data: [
            { ano: 2024, faixaMin: 0, faixaMax: 2112, aliquota: 0, deducao: 0 },
            { ano: 2024, faixaMin: 2112.01, faixaMax: 2826.65, aliquota: 7.5, deducao: 158.40 },
            { ano: 2024, faixaMin: 2826.66, faixaMax: 3751.05, aliquota: 15, deducao: 370.40 },
            { ano: 2024, faixaMin: 3751.06, faixaMax: 4664.68, aliquota: 22.5, deducao: 651.73 },
            { ano: 2024, faixaMin: 4664.69, faixaMax: null, aliquota: 27.5, deducao: 884.96 },
        ],
    });

    await prisma.usuario.create(
        {
            data: {
                email: "sysadmin@sistema.com",
                name: "Administrador do Sistema",
                senha: "$2b$10$ssHVEl9s1VRj0KldcWPdcuOctVa9naXpECgX2P7xqY2EacTNOqZ.u",
                salt: "$2b$10$ssHVEl9s1VRj0KldcWPdcu",
                grupousuarioId: null
            },
        }
    );
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
