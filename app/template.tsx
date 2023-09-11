'use client'
import React, { useState, useEffect } from 'react';
import Box from "~/components/Atoms/Box";
import theme from "~/theme";
import Paper from '~/components/Atoms/Paper';
import { Text } from '~/components/Atoms/Text';
import SideBar from "~/containers/SideBar";
import { usePathname } from 'next/navigation'
import { ApplicationConstant } from '~/constant/applicationConstant'
import Logo from '~/components/Atoms/Logo'
import { UserProfile } from '~/components/molecules/userProfile'


export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();
  const [showSideBar, setShowSideBar] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    if (
      pathname === ApplicationConstant.SIGNUP_URL_PATH ||
      pathname === ApplicationConstant.SIGNIN_URL_PATH ||
      pathname === ApplicationConstant.FORGOT_PASSWORD_URL_PATH ||
      pathname === "/"
    ) {
      console.log(pathname, "Pathname");
      setShowSideBar(false);
      setIsLoading(false);
    } else {
      setShowSideBar(true);
      setIsLoading(false);
    }
  }, [pathname]);

  return isLoading ? (
    <Paper display='grid' placeItems='center' style={{ height: '100vh' }} elevation={1} backgroundColor={theme.colors.whiteA} borderRadius={4}>
      <Text size='xlarge' weight='large'>Loading...</Text>
    </Paper>
  ) : (
    <Box backgroundColor={theme.colors.primary} padding={1} display='flex' gap='12px' height='100vh'>
      {showSideBar &&  <SideBar />}
      <Box style={{ flex: '1 1 auto' }} backgroundColor='none'>
        {children}
      </Box>
    </Box>
  );
}
