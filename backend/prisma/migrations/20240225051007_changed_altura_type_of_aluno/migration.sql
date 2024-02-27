/*
  Warnings:

  - You are about to alter the column `altura` on the `aluno` table. The data in that column could be lost. The data in that column will be cast from `Decimal(3,2)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "aluno" ALTER COLUMN "altura" SET DATA TYPE INTEGER;
