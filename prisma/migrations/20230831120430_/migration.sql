-- AlterTable
ALTER TABLE `consultation` MODIFY `date_consult` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `RendezVous` (
    `id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `heure_debut` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `docteur` VARCHAR(191) NOT NULL,
    `lien` VARCHAR(191) NOT NULL,
    `patientId` VARCHAR(191) NULL,

    UNIQUE INDEX `RendezVous_lien_key`(`lien`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
