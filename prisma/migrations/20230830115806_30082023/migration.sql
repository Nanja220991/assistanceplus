/*
  Warnings:

  - Added the required column `paraclinique` to the `Consultation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `consultation` ADD COLUMN `paraclinique` VARCHAR(191) NOT NULL;
