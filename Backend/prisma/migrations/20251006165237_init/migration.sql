/*
  Warnings:

  - Added the required column `description` to the `Hobby` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hobby" ADD COLUMN     "description" TEXT NOT NULL;
