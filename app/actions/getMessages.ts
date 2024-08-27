import prisma from '@/app/libs/prismadb';

const getMesages = async (
    conversationId: string
) => {
    try {
        const messages = await prisma.message.findMany({
            where: {
                conversationId: conversationId
            },
            include: {
                sender: true,
                seen: true,
            },
            orderBy: {
                createdAt: "asc"
            }
        });
        return messages;
    } catch (e: any) {
        return null;
    }
}
export default getMesages;
