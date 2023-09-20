/*
  Warnings:

  - Added the required column `clinique` to the `Consultation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conduite` to the `Consultation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diagnostic` to the `Consultation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prescripteur` to the `Consultation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `consultation` ADD COLUMN `clinique` VARCHAR(191) NOT NULL,
    ADD COLUMN `conduite` VARCHAR(191) NOT NULL,
    ADD COLUMN `diagnostic` VARCHAR(191) NOT NULL,
    ADD COLUMN `prescripteur` VARCHAR(191) NOT NULL;
