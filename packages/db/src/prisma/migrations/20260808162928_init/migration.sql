/*
  Warnings:

  - You are about to drop the column `authId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_authId_fkey";

-- DropIndex
DROP INDEX "User_authId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "authId";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "Auth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
