import { title } from 'process'
import React from 'react'
import Box from '~/components/Atoms/Box'
import { Text } from '~/components/Atoms/Text'

const AuthBox = ({title,InputFileds}:{title:string , InputFileds:React.ReactNode }) => {
  return (
    <Box padding={1.5} display='flex' flexDirection='column' justifyContent='space-between' alignItems='center' gap='20px'>
        <Text size='xlarge' weight='xlarge'>{title}</Text>
        <Box display='flex' alignItems='center' minHeight='70vh' justifyContent='center'>
            {InputFileds}
        </Box>
    </Box>
  )
}

export default AuthBox