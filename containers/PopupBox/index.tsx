/** @jsxImportSource @emotion/react */
'use client'
import React from 'react';
import * as Dialog from "@radix-ui/react-dialog";
import Box from '~/components/Atoms/Box';
import { DialogContent, DialogOverlay, DialogTitle } from '~/components/molecules/Dailog';
import { Text } from '~/components/Atoms/Text';
import { MdDelete } from 'react-icons/md';
import theme from '~/theme';
import { Button } from '~/components/Atoms/Button';
import { jsx,css } from "@emotion/react";

const poppstyle  = css`
  @media (max-width: 468px) {

  width: 100% !important;
  
  }
`;


const PopupBox = ({ text, label, onClick,id , btntext,updateStatus}: { text: string, label: 'deletProduct' | 'deleteCart' | 'servicePopup' , onClick: any,id?:string , btntext?:string,updateStatus?:string}) => {

  return (
    <Box>
      <Dialog.Root>
        {label === 'deleteCart' && 
        <Dialog.Trigger asChild style={{ cursor: 'pointer' }}>
          <MdDelete color={theme.colors.redA} fontSize="20px" />
        </Dialog.Trigger>
        }
        {label === 'servicePopup' && 
        <Dialog.Trigger asChild style={{ cursor: 'pointer' }}>
          <Button width="200px" typea={btntext === 'Cancel' ? 'outlined' : 'contained'} variant={btntext === 'Cancel' ? 'secondary' : 'primary'} height="35px">
            {btntext}
          </Button>
        </Dialog.Trigger>
        }
        {label === 'deletProduct' && 
        <Dialog.Trigger asChild style={{ cursor: 'pointer' }}>
         <Button height='35px' width='120px' variant='Canceld' typea='outlined' >Delete</Button>
        </Dialog.Trigger>
        }
        <DialogOverlay />
        <DialogContent css={poppstyle} height='130px' width='80vh' pd='20px 20px' transform='translate(-50%, -50%)' top='50%' left='50%' >
          <Box display='flex' alignItems='center' flexDirection='column' width='100%' justifyContent='space-between' height='100%' pt='20px'>
            <Text size='large'>{text}</Text>
            <Box width='100%' display='flex' gap='15px' justifyContent='end'>
              <Dialog.Close style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <Text size='large' color={theme.colors.secondary}>No</Text>
              </Dialog.Close>
              <Dialog.Close style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={()=>onClick(id,updateStatus)}>
                <Text size='large' color={theme.colors.redA}>Yes</Text>
              </Dialog.Close>
            </Box>
          </Box>
        </DialogContent>
      </Dialog.Root>
    </Box>
  );
}

export default PopupBox;