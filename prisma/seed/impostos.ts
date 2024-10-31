import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const existeDados = await prisma.aliquotasINSS.findFirst();

    if (existeDados) {
        console.log("Já foram encontrados os dados, não é necessario o preenchimento!")
        return;
    }

    await prisma.aliquotasINSS.createMany({
        data: [
            { ano: 2024, faixa_min: 0, faixa_max: 1320, aliquota: 7.5 },
            { ano: 2024, faixa_min: 1320.01, faixa_max: 2571.29, aliquota: 9 },
            { ano: 2024, faixa_min: 2571.30, faixa_max: 3856.94, aliquota: 12 },
            { ano: 2024, faixa_min: 3856.95, faixa_max: 7507.49, aliquota: 14 },
        ],
    });

    await prisma.aliquotasIRRF.createMany({
        data: [
            { ano: 2024, faixa_min: 0, faixa_max: 2112, aliquota: 0, deducao: 0 },
            { ano: 2024, faixa_min: 2112.01, faixa_max: 2826.65, aliquota: 7.5, deducao: 158.40 },
            { ano: 2024, faixa_min: 2826.66, faixa_max: 3751.05, aliquota: 15, deducao: 370.40 },
            { ano: 2024, faixa_min: 3751.06, faixa_max: 4664.68, aliquota: 22.5, deducao: 651.73 },
            { ano: 2024, faixa_min: 4664.69, faixa_max: null, aliquota: 27.5, deducao: 884.96 },
        ],
    });

    await prisma.usuario.create(
        {
            data: {
                email: "sysadmin@sistema.com",
                name: "Administrador do Sistema",
                senha: "$2b$10$ssHVEl9s1VRj0KldcWPdcuOctVa9naXpECgX2P7xqY2EacTNOqZ.u",
                salt: "$2b$10$ssHVEl9s1VRj0KldcWPdcu",

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
