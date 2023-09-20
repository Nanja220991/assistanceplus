/*
  Warnings:

  - You are about to drop the column `patientId` on the `rendezvous` table. All the data in the column will be lost.
  - Added the required column `updateAt` to the `Consultation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userCreate` to the `Consultation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userUpdate` to the `Consultation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userCreate` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userUpdate` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `RendezVous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_patient` to the `RendezVous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `RendezVous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userCreate` to the `RendezVous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userUpdate` to the `RendezVous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userCreate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userUpdate` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `RendezVous_lien_key` ON `rendezvous`;

-- AlterTable
ALTER TABLE `consultation` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL,
    ADD COLUMN `userCreate` VARCHAR(191) NOT NULL,
    ADD COLUMN `userUpdate` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `patient` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL,
    ADD COLUMN `userCreate` VARCHAR(191) NOT NULL,
    ADD COLUMN `userUpdate` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `rendezvous` DROP COLUMN `patientId`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_patient` VARCHAR(191) NOT NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL,
    ADD COLUMN `userCreate` VARCHAR(191) NOT NULL,
    ADD COLUMN `userUpdate` VARCHAR(191) NOT NULL,
    MODIFY `lien` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL,
    ADD COLUMN `userCreate` VARCHAR(191) NOT NULL,
    ADD COLUMN `userUpdate` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Controle` (
    `id` VARCHAR(191) NOT NULL,
    `id_consultation` VARCHAR(191) NOT NULL,
    `date_controle` VARCHAR(191) NOT NULL,
    `motif_controle` VARCHAR(191) NOT NULL,
    `conduite` VARCHAR(191) NOT NULL,
    `diagnostic` VARCHAR(191) NOT NULL,
    `prescripteur` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `userUpdate` VARCHAR(191) NOT NULL,
    `userCreate` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fichiers` (
    `id` VARCHAR(191) NOT NULL,
    `id_patient` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `base64File` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `userUpdate` VARCHAR(191) NOT NULL,
    `userCreate` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Controle` ADD CONSTRAINT `Controle_id_consultation_fkey` FOREIGN KEY (`id_consultation`) REFERENCES `Consultation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RendezVous` ADD CONSTRAINT `RendezVous_id_patient_fkey` FOREIGN KEY (`id_patient`) REFERENCES `Patient`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Fichiers` ADD CONSTRAINT `Fichiers_id_patient_fkey` FOREIGN KEY (`id_patient`) REFERENCES `Patient`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
