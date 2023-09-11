import React from 'react'
import Box from '~/components/Atoms/Box'
import AuthLayouts from '~/components/templates/AuthLayout'
import ForgotPasswordForm from '~/containers/AuthContainers/forgotPassword'

const ForgotPasswordPage = () => {
  return (
    <Box>
      <AuthLayouts title='Forgot Password' InputFileds={<ForgotPasswordForm/>}/>
    </Box>
  )
}

export default ForgotPasswordPage