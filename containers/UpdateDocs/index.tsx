'use client'
import React from 'react';
import * as Dialog from "@radix-ui/react-dialog";
import Box from '~/components/Atoms/Box';
import { DialogContent, DialogOverlay, DialogTitle } from '~/components/molecules/Dailog';
import { Text } from '~/components/Atoms/Text';
import { MdDelete, MdEdit } from 'react-icons/md';
import theme from '~/theme';
import { Button } from '~/components/Atoms/Button';
import { UploadImage } from '~/components/molecules/inputField';

const UpdateDocsPopupBox = ({ document, onClick, id, label,onchange }: { document: string, onClick?: any, id?: string, label?: string,onchange?:any }) => {

  return (
    <Box>
      <Dialog.Root>
        <Dialog.Trigger asChild style={{ cursor: 'pointer' }}>
          {label === 'certification' ?
            <Button width="200px" height="35px">
              Upload Certifition
            </Button> :
            <MdEdit color={theme.colors.blackA} fontSize="20px" style={{ cursor: 'pointer' }} />
          }
        </Dialog.Trigger>
        <DialogOverlay />
        <DialogContent height='200px' width='80vh' pd='20px 20px' transform='translate(-50%, -50%)' top='50%' left='50%'>
          <Box display='flex' alignItems='center' flexDirection='column' width='100%' justifyContent='space-between' height='100%' pt='20px'>
            <Box
              display="flex"
              key={document}
              alignItems="end"
              flexWrap="wrap"
            >
              <Text weight="large" width="175px">
                {document} &nbsp; :
              </Text>
              <UploadImage
                id={document}
                name={document}
                type="file"
                label={document}
              // error={formik.touched.files}
              // errorMessage={formik.errors.files}
              onChange={(event) => onchange(event)}
              />
            </Box>
            <Box width='100%' display='flex' gap='15px' justifyContent='center'>
              <Dialog.Close style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <Button width='150px' height='35px' color={theme.colors.secondary}>Cancel</Button>
              </Dialog.Close>
              <Dialog.Close style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => onClick(id)}>
                <Button width='150px' height='35px' color={theme.colors.redA}>Update</Button>
              </Dialog.Close>
            </Box>
          </Box>
        </DialogContent>
      </Dialog.Root>
    </Box>
  );
}

export default UpdateDocsPopupBox;