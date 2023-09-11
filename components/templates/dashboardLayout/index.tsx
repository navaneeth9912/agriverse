import React from 'react'
import Box from '~/components/Atoms/Box'
import Header from '~/components/molecules/Header';
import UploadDocuments from '~/containers/AuthContainers/uploadDocs';
import DashboardLinks from '~/components/molecules/DashboardLinks';

const DashBoardLayout = () => {
  return (
    <Box display='flex' flexDirection='column' gap='12px' backgroundColor='none'>
        <Header/>
        <DashboardLinks/>
        <UploadDocuments/>
    </Box>
  )
}

export default DashBoardLayout