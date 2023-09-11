import React from 'react'
import SideBarLinkList from '~/components/molecules/SideBarLink'
import { UserProfile } from '~/components/molecules/userProfile'
import Logo from '~/components/Atoms/Logo'
import Paper from '~/components/Atoms/Paper'
import { css } from '@emotion/css'

const SideBar = () => {

  let position:string;
  if(window.innerWidth<500){
    position = "absolute"
  }
  else{
    position='sticky'
  }
  return (
    <Paper position={position} top='0px' overflowx='scroll' elevation={1} display='flex' flexDirection='column' justifyContent='space-between' alignItems='center' minWidth='290px' maxWidth='290px' pt='20px' pb='20px' 
    style={{
      minHeight: `calc(100vh - 24px)`,
      maxHeight:`calc(100vh - 24px)`,
    }}
 
    >
      <Logo width={250} height={100}/>
      <SideBarLinkList/>
      <UserProfile/>
    </Paper>
  )
}

export default SideBar