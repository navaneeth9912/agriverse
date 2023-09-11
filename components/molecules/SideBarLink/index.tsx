'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Text } from '~/components/Atoms/Text';
import Box from '~/components/Atoms/Box';
import { getSideBarLinks } from '~/utilis/getSideBarLink';
import { useStore } from '~/store'

type MenuItem = {
    name: string;
    link: string;
};

const SideBarLinkList = () => {

    const store = useStore();
    const allowLinks = store.user.isDocsVerify
    const pathname = usePathname();
    const menuItems:MenuItem[] = getSideBarLinks(store.user.role)

    return (
        <Box display='flex' flexDirection='column' alignItems='start' gap='15px' height='50vh' style={{pointerEvents: allowLinks ? 'auto' : 'none' ,opacity: allowLinks ? 1 : 0.5 , cursor: allowLinks ? 'pointer' : 'not-allowed'}}>
            { menuItems.map((item: MenuItem, index: number) => (
                <Link href={item.link} key={index} style={{width:'fit-content'}}>
                    <Text size='large' weight='large'>{item.name}</Text>
                </Link>
            ))}
        </Box>
    );
};

export default SideBarLinkList;
