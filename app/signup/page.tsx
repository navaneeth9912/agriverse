import React from 'react'
import Box from '~/components/Atoms/Box'
import AuthLayouts from '~/components/templates/AuthLayout'
import SignUpForm from '~/containers/AuthContainers/signUp'

const SignUpPage = () => {
  return (
    <Box>
      <AuthLayouts title='Sign Up' InputFileds={<SignUpForm/>}/>
    </Box>
  )
}

export default SignUpPage