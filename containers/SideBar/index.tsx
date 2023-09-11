import React from 'react'
import SideBarLinkList from '~/components/molecules/SideBarLink'
import { UserProfile } from '~/components/molecules/userProfile'
import Logo from '~/components/Atoms/Logo'
import Paper from '~/components/Atoms/Paper'

const SideBar = () => {

  return (
    <Paper elevation={1} display='flex' flexDirection='column' justifyContent='space-between' alignItems='center' minWidth='290px' maxWidth='290px' style={{
      height: `calc(100vh - 20px)`,
      padding:'20px 10px',
      position: 'sticky',
      top: '18px'
    }}>
      <Logo width={180} height={35}/>
      <SideBarLinkList/>
      <UserProfile/>
    </Paper>
  )
}

export default SideBar