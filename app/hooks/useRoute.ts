'use client'
import { useMemo } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { HiChat } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { signOut } from 'next-auth/react';
import useConversation from './useConversation';

const useRoutes = () => {
    const pathname = usePathname();
    const { conversationId } = useConversation();
    const routes = useMemo(() => [{
        label: 'Chat',
        href: '/conversations',
        icon: HiChat,
        active: pathname === '/conversations' || !!conversationId,
    },
    {
        label: 'User',
        href: '/user',
        icon: HiUsers,
        active: pathname === '/user',

    },
    {
        label: 'Logout',
        href: '#',
        onClick: () => signOut(),
        icon: HiArrowLeftOnRectangle,
    }], [pathname, conversationId]);
    return routes;
}

export default useRoutes;
