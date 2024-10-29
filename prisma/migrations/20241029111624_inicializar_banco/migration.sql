-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "salt" VARCHAR(255) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AliquotasINSS" (
    "id" SERIAL NOT NULL,
    "ano" INTEGER NOT NULL,
    "faixa_min" DECIMAL(12,2) NOT NULL,
    "faixa_max" DECIMAL(12,2),
    "aliquota" DECIMAL(12,2) NOT NULL,

    CONSTRAINT "AliquotasINSS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AliquotasIRRF" (
    "id" SERIAL NOT NULL,
    "ano" INTEGER NOT NULL,
    "faixa_min" DECIMAL(12,2) NOT NULL,
    "faixa_max" DECIMAL(12,2),
    "aliquota" DECIMAL(12,2) NOT NULL,
    "deducao" DECIMAL(12,2) NOT NULL,

    CONSTRAINT "AliquotasIRRF_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empresa" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "razao_social" VARCHAR(150) NOT NULL,
    "email" VARCHAR(150) NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Funcionario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "salario" DECIMAL(12,2) NOT NULL,
    "empresaId" INTEGER NOT NULL,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Funcionario" ADD CONSTRAINT "Funcionario_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
