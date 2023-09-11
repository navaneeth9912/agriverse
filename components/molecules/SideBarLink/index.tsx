'use client'
import React, { ReactElement } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Text } from '~/components/Atoms/Text';
import Box from '~/components/Atoms/Box';
import { getDashboardLinks } from '~/utilis/getDashBoardLinks';
import { ApplicationConstant } from '~/constant/applicationConstant';
import theme from '~/theme';
import { useContext } from 'react';
import { StoreContext } from '~/src/models';

type MenuItem = {
    name: string;
    url: string;
    icon: ReactElement<any, any>;
    count: number
};

const SideBarLinkList = () => {

    const store = useContext(StoreContext);
    const allowLinks = store.loggedInUser.userProfileStatus === 'APPROVED'
    const pathname = usePathname();
    const role:any = store.loggedInUser.userRole
    // const userProfile: any = store.loggedInUser?.userProfile?.split('-');
    // const subRoles = userProfile?.map((part: any) => part.toLowerCase()) as string[];
    const subRoles:any = store.loggedInUser?.requestedProfile;
    const menuItems:MenuItem[] = getDashboardLinks(role , subRoles)

    return (
        <Box display='flex' flexDirection='column' alignItems='start' gap='15px' height='50vh' style={{pointerEvents: allowLinks ? 'auto' : 'none' ,opacity: allowLinks ? 1 : 0.5 , cursor: allowLinks ? 'pointer' : 'not-allowed'}}>
            <Link href={ApplicationConstant.DASHBOARD_URL_PATH}  style={{width:'fit-content'}}>
                    <Text size='large' weight='large' color={pathname === ApplicationConstant.DASHBOARD_URL_PATH ? theme.colors.secondary : theme.colors.blackA}>DashBoard</Text>
            </Link>
            { menuItems.map((item: MenuItem, index: number) => (
                <Link href={item.url} key={index} style={{width:'fit-content'}}>
                    <Text size='large' weight='large' color={pathname === item.url ? theme.colors.secondary : theme.colors.blackA}>{item.name}</Text>
                </Link>
            ))}
        </Box>
    );
};

export default SideBarLinkList;
