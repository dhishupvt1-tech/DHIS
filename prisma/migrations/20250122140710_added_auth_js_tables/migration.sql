/*
  Warnings:

  - You are about to drop the column `is_time_in` on the `attendance` table. All the data in the column will be lost.
  - You are about to drop the column `scanned_by_email` on the `attendance` table. All the data in the column will be lost.
  - You are about to drop the column `school_id` on the `attendance` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `events` table. All the data in the column will be lost.
  - Added the required column `event_id` to the `attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scanner_user_id` to the `attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_time` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventor_id` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_time` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('ORGANIZER', 'COORDINATOR', 'MEMBER');

-- DropIndex
DROP INDEX "attendance_school_id_idx";

-- AlterTable
ALTER TABLE "attendance" DROP COLUMN "is_time_in",
DROP COLUMN "scanned_by_email",
DROP COLUMN "school_id",
ADD COLUMN     "event_id" BIGINT NOT NULL,
ADD COLUMN     "scanner_user_id" BIGINT NOT NULL,
ADD COLUMN     "user_id" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "eventors" ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "events" DROP COLUMN "duration",
ADD COLUMN     "end_time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "eventor_id" BIGINT NOT NULL,
ADD COLUMN     "start_time" TIMESTAMP(3) NOT NULL;

-- DropEnum
DROP TYPE "event_duration";

-- CreateTable
CREATE TABLE "eventors_users" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "user_role" NOT NULL,

    CONSTRAINT "eventors_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("provider","providerAccountId")
);

-- CreateTable
CREATE TABLE "Session" (
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("identifier","token")
);

-- CreateTable
CREATE TABLE "Authenticator" (
    "credentialID" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "credentialPublicKey" TEXT NOT NULL,
    "counter" INTEGER NOT NULL,
    "credentialDeviceType" TEXT NOT NULL,
    "credentialBackedUp" BOOLEAN NOT NULL,
    "transports" TEXT,

    CONSTRAINT "Authenticator_pkey" PRIMARY KEY ("userId","credentialID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "Authenticator_credentialID_key" ON "Authenticator"("credentialID");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Authenticator" ADD CONSTRAINT "Authenticator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
