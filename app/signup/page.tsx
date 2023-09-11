import React from 'react'
import Box from '~/components/Atoms/Box'
import AuthLayouts from '~/components/templates/AuthLayout'
import SignUpForm from '~/containers/AuthContainers/signUp'

const SignInPage = () => {
  return (
    <Box>
      <AuthLayouts title='Sign Up' InputFileds={<SignUpForm/>}/>
    </Box>
  )
}

export default SignInPage