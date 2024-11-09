/*
  Warnings:

  - You are about to drop the column `grupousuarioId` on the `usuario` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_grupousuarioId_fkey";

-- AlterTable
ALTER TABLE "aliquotasInss" ADD COLUMN     "deducao" DECIMAL(12,2) NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "grupousuarioId",
ADD COLUMN     "grupoUsuarioId" INTEGER;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_grupoUsuarioId_fkey" FOREIGN KEY ("grupoUsuarioId") REFERENCES "grupo_usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
