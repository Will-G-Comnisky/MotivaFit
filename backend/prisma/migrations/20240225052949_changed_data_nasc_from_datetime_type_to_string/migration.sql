/*
  Warnings:

  - Changed the type of `data_nasc` on the `aluno` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "aluno" DROP COLUMN "data_nasc",
ADD COLUMN     "data_nasc" VARCHAR(20) NOT NULL;
