import React from 'react'
import Box from '~/components/Atoms/Box'
import Header from '~/components/molecules/Header';
import UploadDocuments from '~/containers/AuthContainers/uploadDocs';
import DashboardLinks from '~/components/molecules/DashboardLinks';

const DashBoardLayout = () => {
  return (
    <Box display='flex' flexDirection='column' gap='12px' backgroundColor='none'>
        <Header/>
        <Box overflowy="scroll" style={{ maxHeight:`calc(100vh - 74px)`, minHeight:`calc(100vh - 74px)` }}  gap='12px' backgroundColor='none'>
          <Box mb='12px'>
            <DashboardLinks/>
          </Box>
          <UploadDocuments/>
        </Box>
    </Box>
  )
}

export default DashBoardLayout