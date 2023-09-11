'use client'
import Paper from "~/components/Atoms/Paper";
import theme from "~/theme";
import Logo from '~/components/Atoms/Logo'
import React, { useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { ApplicationConstant } from "~/constant/applicationConstant";

export default  function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push(ApplicationConstant.SIGNIN_URL_PATH)
  }, []);
  
  return (
    <Paper display='grid' placeItems='center' style={{height:`calc(100vh - 24px)`}} elevation={1} backgroundColor={theme.colors.whiteA} borderRadius={4}>
      <Logo width={350} height={90}/>
    </Paper>
  );
}
