/*
  Warnings:

  - Added the required column `eventor_id` to the `eventors_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `eventors_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "attendance" ALTER COLUMN "scanner_user_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "eventors_users" ADD COLUMN     "eventor_id" BIGINT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_scanner_user_id_fkey" FOREIGN KEY ("scanner_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_eventor_id_fkey" FOREIGN KEY ("eventor_id") REFERENCES "eventors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventors_users" ADD CONSTRAINT "eventors_users_eventor_id_fkey" FOREIGN KEY ("eventor_id") REFERENCES "eventors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventors_users" ADD CONSTRAINT "eventors_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
