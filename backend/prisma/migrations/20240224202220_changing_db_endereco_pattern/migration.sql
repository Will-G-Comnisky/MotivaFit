/*
  Warnings:

  - You are about to drop the column `id_bairro` on the `endereco` table. All the data in the column will be lost.
  - You are about to drop the `bairro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cidade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `estado` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bairro` to the `endereco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `endereco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `endereco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `endereco` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bairro" DROP CONSTRAINT "bairro_id_cidade_fkey";

-- DropForeignKey
ALTER TABLE "cidade" DROP CONSTRAINT "cidade_id_estado_fkey";

-- DropForeignKey
ALTER TABLE "endereco" DROP CONSTRAINT "endereco_id_bairro_fkey";

-- AlterTable
ALTER TABLE "endereco" DROP COLUMN "id_bairro",
ADD COLUMN     "bairro" VARCHAR(35) NOT NULL,
ADD COLUMN     "cidade" VARCHAR(35) NOT NULL,
ADD COLUMN     "estado" VARCHAR(35) NOT NULL,
ADD COLUMN     "uf" VARCHAR(2) NOT NULL;

-- Update table
UPDATE endereco
SET bairro = 'Centro', 
    cidade = 'Blumenau', 
    estado = 'Santa Catarina',
    uf = 'SC'
WHERE id_endereco = 1;

-- DropTable
DROP TABLE "bairro";

-- DropTable
DROP TABLE "cidade";

-- DropTable
DROP TABLE "estado";
