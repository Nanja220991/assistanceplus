-- DropIndex
DROP INDEX `Fichiers_id_patient_fkey` ON `fichiers`;

-- AlterTable
ALTER TABLE `fichiers` MODIFY `base64File` LONGBLOB NOT NULL;
