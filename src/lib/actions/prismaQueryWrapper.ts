"use server"

type PrismaQueryFunction<T> = () => Promise<T>;

export async function prismaQueryWrapper<T>(queryFn: PrismaQueryFunction<T>) {
    try {
        const result = await queryFn();
        return result;
    } catch (error) {
        // Handle specific error types, log the error, or rethrow as needed
        console.error('Prisma query error:', error);
        throw new Error('Database operation failed');
    }
}
