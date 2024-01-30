/*
  Warnings:

  - A unique constraint covering the columns `[kfid]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "kfid" SERIAL NOT NULL,
ADD COLUMN     "merchandise" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "User_kfid_key" ON "User"("kfid");
