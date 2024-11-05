-- DropForeignKey
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_grupousuarioId_fkey";

-- AlterTable
ALTER TABLE "usuario" ALTER COLUMN "grupousuarioId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_grupousuarioId_fkey" FOREIGN KEY ("grupousuarioId") REFERENCES "grupo_usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
