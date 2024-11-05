-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "salt" VARCHAR(255) NOT NULL,
    "grupousuarioId" INTEGER NOT NULL,

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

-- CreateTable
CREATE TABLE "grupo_usuario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "descricao" VARCHAR(150) NOT NULL,

    CONSTRAINT "grupo_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissao" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "descricao" VARCHAR(150) NOT NULL,

    CONSTRAINT "permissao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grupo_usuario_permisao" (
    "id" SERIAL NOT NULL,
    "permissaoId" INTEGER NOT NULL,
    "grupousuarioId" INTEGER NOT NULL,

    CONSTRAINT "grupo_usuario_permisao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_grupousuarioId_fkey" FOREIGN KEY ("grupousuarioId") REFERENCES "grupo_usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionario" ADD CONSTRAINT "funcionario_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grupo_usuario_permisao" ADD CONSTRAINT "grupo_usuario_permisao_permissaoId_fkey" FOREIGN KEY ("permissaoId") REFERENCES "permissao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grupo_usuario_permisao" ADD CONSTRAINT "grupo_usuario_permisao_grupousuarioId_fkey" FOREIGN KEY ("grupousuarioId") REFERENCES "grupo_usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
