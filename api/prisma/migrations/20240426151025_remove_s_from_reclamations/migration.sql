/*
  Warnings:

  - The primary key for the `client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `FullName` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `client` table. All the data in the column will be lost.
  - The primary key for the `employer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `reponse` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `reclamations` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `FullName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_clientId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_employerId_fkey`;

-- DropIndex
DROP INDEX `Client_email_key` ON `client`;

-- AlterTable
ALTER TABLE `client` DROP PRIMARY KEY,
    DROP COLUMN `FullName`,
    DROP COLUMN `email`,
    DROP COLUMN `firstName`,
    DROP COLUMN `lastName`,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `employer` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `reponse` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    ADD COLUMN `FullName` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `employerId` VARCHAR(191) NULL,
    MODIFY `clientId` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `reclamations`;

-- CreateTable
CREATE TABLE `Reclamation` (
    `id` VARCHAR(191) NOT NULL,
    `refRec` VARCHAR(191) NOT NULL DEFAULT 'R000001',
    `observation` VARCHAR(191) NOT NULL,
    `documentURL` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_employerId_fkey` FOREIGN KEY (`employerId`) REFERENCES `Employer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
