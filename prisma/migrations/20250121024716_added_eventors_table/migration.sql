-- CreateEnum
CREATE TYPE "event_duration" AS ENUM ('AM_ONLY', 'PM_ONLY', 'AM_AND_PM');

-- CreateTable
CREATE TABLE "attendance" (
    "id" BIGSERIAL NOT NULL,
    "time" TIME(6) NOT NULL,
    "date" DATE NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "school_id" TEXT NOT NULL,
    "is_time_in" BOOLEAN NOT NULL,
    "scanned_by_email" TEXT,

    CONSTRAINT "attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "description" TEXT,
    "location" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "duration" "event_duration" NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eventors" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "eventors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "attendance_school_id_idx" ON "attendance"("school_id");
