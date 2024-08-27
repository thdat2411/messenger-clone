import getCurrentUser from "./getCurrentUser";
import prisma from "@/app/libs/prismadb";
const getConversations = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser?.id) {
        return [];
    }
    try {
        const conversation = await prisma.conversation.findMany({
            orderBy: {
                lastMessageAt: 'desc'
            },
            where: {
                userIds: {
                    has: currentUser.id,
                }
            },
            include: {
                users: true,
                messages: {
                    include: {
                        sender: true,
                        seen: true
                    }
                }
            },
        });
        return conversation;
    } catch (e) {
        return [];
    }

}

export default getConversations
