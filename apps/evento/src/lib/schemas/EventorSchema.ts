import { z } from "zod";

export const EventorSchema = z.object({
    id: z.bigint().optional(), // Represents the BigInt type in Prisma
    createdAt: z.date().optional(), // DateTime in Prisma maps to JavaScript Date
    name: z.string().min(1, "Name is required"), // String with a minimum length of 1
    description: z.string().nullable(), // String? maps to a nullable string
    isActive: z.boolean().default(true), // Boolean with a default value of true
});
