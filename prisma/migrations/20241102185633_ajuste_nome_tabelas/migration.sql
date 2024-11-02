/*
  Warnings:

  - You are about to drop the `AliquotasINSS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AliquotasIRRF` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Empresa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Funcionario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Funcionario" DROP CONSTRAINT "Funcionario_empresaId_fkey";

-- DropTable
DROP TABLE "AliquotasINSS";

-- DropTable
DROP TABLE "AliquotasIRRF";

-- DropTable
DROP TABLE "Empresa";

-- DropTable
DROP TABLE "Funcionario";

-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "salt" VARCHAR(255) NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aliquotasInss" (
    "id" SERIAL NOT NULL,
    "ano" INTEGER NOT NULL,
    "faixa_min" DECIMAL(12,2) NOT NULL,
    "faixa_max" DECIMAL(12,2),
    "aliquota" DECIMAL(12,2) NOT NULL,

    CONSTRAINT "aliquotasInss_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aliquotasIrrf" (
    "id" SERIAL NOT NULL,
    "ano" INTEGER NOT NULL,
    "faixa_min" DECIMAL(12,2) NOT NULL,
    "faixa_max" DECIMAL(12,2),
    "aliquota" DECIMAL(12,2) NOT NULL,
    "deducao" DECIMAL(12,2) NOT NULL,

    CONSTRAINT "aliquotasIrrf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "empresa" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "razao_social" VARCHAR(150) NOT NULL,
    "email" VARCHAR(150) NOT NULL,

    CONSTRAINT "empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcionario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "salario" DECIMAL(12,2) NOT NULL,
    "empresaId" INTEGER NOT NULL,

    CONSTRAINT "funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "funcionario" ADD CONSTRAINT "funcionario_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
