'use client'
import React from 'react'
import Link from 'next/link';
import { ReactElement, useContext } from 'react';
import Box from '~/components/Atoms/Box';
import Paper from '~/components/Atoms/Paper';
import { Text } from '~/components/Atoms/Text';
import { useStore } from '~/store';
import { getDashboardLinks } from '~/utilis/getDashBoardLinks';
import { StoreContext } from '~/src/models';
import { jsx, css } from '@emotion/react';

type HomeNavItem = {
  name: string;
  url: string;
  icon: ReactElement<any, any>;
  count: number
};


const DashboardLinks = () => {

  const itemStyle = css`
  @media (max-width:480px){
    min-width:40vh !important;
 }
 @media (max-width:830px){
  min-width:32vh;
} 
  `
  const justifyStyle = css`
  @media (max-width:480px){
    justify-content:center
 }
 
  `

  const store = useContext(StoreContext);
  const role: any = store.loggedInUser.userRole ?? "BUYER"
  // const userProfile: any = store.loggedInUser?.userProfile?.split('-');
  // const subRoles = userProfile?.map((part: any) => part.toLowerCase()) as string[];
  const subRoles: any = store.loggedInUser?.requestedProfile;
  const allowLinks = store.loggedInUser.userProfileStatus === 'APPROVED'
  console.log(allowLinks, "allowlinks")
  const DashboardLinksList = getDashboardLinks(role, subRoles);
  console.log("DashboardLinksList", DashboardLinksList)

  console.log(store.loggedInUser.userProfileStatus)


  return (
    <Box css={justifyStyle} minWidth='100%' display='flex' alignItems='center' gap='12px' flexWrap='wrap' backgroundColor='none'>
      {
        DashboardLinksList.map((item: HomeNavItem) => (
          <Link href={item.url} style={{ pointerEvents: allowLinks ? 'auto' : 'none', opacity: allowLinks ? 1 : 0.5 }}>
            <Paper css={itemStyle} borderRadius={0} elevation={1} minHeight='80px' minWidth='39vh' display='flex' alignItems='center' gap='15px' style={{ padding: '0px 20px', cursor: allowLinks ? 'pointer' : 'not-allowed' }}>
              <Box display='flex' justifyContent='center' alignItems='center' width='60px' height='60px' borderRadius={100} style={{ boxShadow: '0px 4px 4px #1EB442' }} >
                {React.cloneElement(item.icon)}
              </Box>
              <Box display='flex' justifyContent='center' alignItems='center'>
                {/* <Text size='xlarge' weight="large">
                  {item.count}
                </Text> */}
                <Text weight="large" size='large'>
                  {item.name}
                </Text>
              </Box>
            </Paper>
          </Link>
        ))
      }
    </Box>
  )
}

export default DashboardLinks