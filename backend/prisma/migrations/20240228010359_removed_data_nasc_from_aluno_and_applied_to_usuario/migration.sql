/*
  Warnings:

  - You are about to drop the column `data_nasc` on the `aluno` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "aluno" DROP COLUMN "data_nasc";

-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "data_nasc" VARCHAR(20) NOT NULL DEFAULT ' ';
