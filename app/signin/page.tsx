import React from 'react'
import Box from '~/components/Atoms/Box'
import AuthLayouts from '~/components/templates/AuthLayout'
import SignInForm from '~/containers/AuthContainers/signIn'

const SignInPage = () => {
  return (
    <Box>
      <AuthLayouts title='Sign In' InputFileds={<SignInForm/>}/>
    </Box>
  )
}

export default SignInPage