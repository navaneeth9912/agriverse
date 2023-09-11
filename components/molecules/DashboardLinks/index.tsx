'use client'
import React from 'react'
import Link from 'next/link';
import { ReactElement } from 'react';
import Box from '~/components/Atoms/Box';
import Paper from '~/components/Atoms/Paper';
import { Text } from '~/components/Atoms/Text';
import { useStore } from '~/store';
import { getDashboardLinks } from '~/utilis/getDashBoardLinks';
  
  type HomeNavItem = {
    name: string;
    url: string;
    icon: ReactElement<any, any>;
  };

  
  const DashboardLinks = () => {

    const store = useStore()
    const allowLinks = store.user.isDocsVerify
    const role:string = store.user.role
    const subRoles:string[] = [];
    const DashboardLinksList = getDashboardLinks(role, subRoles);

  return (
    <Box minWidth='100%' display= 'flex' alignItems='center' gap='12px' flexWrap='wrap' backgroundColor='none'>
        {
            DashboardLinksList.map((item:HomeNavItem)=>(
                <Link href={item.url} style={{pointerEvents: allowLinks ? 'auto' : 'none' ,opacity: allowLinks ? 1 : 0.5 }}>
                <Paper borderRadius={0} elevation={1} minHeight= '80px' minWidth= '39.6vh' display= 'flex' alignItems='center'gap='15px' style={{padding:'0px 20px',cursor: allowLinks ? 'pointer' : 'not-allowed'}}>
                    <Box display= 'flex' justifyContent= 'center' alignItems= 'center' width= '60px' height= '60px' borderRadius={100} style={{boxShadow:'0px 4px 4px #1EB442'}} >
                        {React.cloneElement(item.icon)}
                    </Box>
                    <Box display= 'flex' justifyContent= 'center' alignItems= 'center'>
                        <Text size='xlarge' weight="large">
                            {4}
                        </Text>
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