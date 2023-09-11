import React from 'react'
import Box from '~/components/Atoms/Box'
import Paper from '~/components/Atoms/Paper'
import theme from '~/theme'
import AuthBox from '../AuthBox'
import Logo from '~/components/Atoms/Logo'

const AuthLayouts = ({title,InputFileds}:{title:string, InputFileds:React.ReactNode}) => {
  return (
    <Box display='flex' gap='12px' width='100%' style={{height:`calc(100vh - 24px)`}}>
        <Paper height='100%' elevation={3} borderRadius={4} backgroundColor={theme.colors.whiteA} minWidth='340px' padding={1}>
            <AuthBox title={title} InputFileds={InputFileds} />
        </Paper>
        <Paper height='100%' elevation={3} borderRadius={4} backgroundColor={theme.colors.whiteA} width='100%' display='grid' placeItems='center'>
            <Logo width={300} height={50}/>
        </Paper>
    </Box>
  )
}

export default AuthLayouts