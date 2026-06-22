/*
  Warnings:

  - You are about to alter the column `logradouro` on the `endereco` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(150)`.

*/
-- AlterTable
ALTER TABLE `cliente` MODIFY `email` VARCHAR(254) NOT NULL;

-- AlterTable
ALTER TABLE `endereco` MODIFY `logradouro` VARCHAR(150) NOT NULL;
