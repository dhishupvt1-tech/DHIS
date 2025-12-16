/*
  Warnings:

  - You are about to drop the column `eventId` on the `Attendance` table. All the data in the column will be lost.
  - Added the required column `eventorId` to the `Attendance` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_eventId_fkey";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "eventId",
ADD COLUMN     "eventorId" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_eventorId_fkey" FOREIGN KEY ("eventorId") REFERENCES "Eventor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
