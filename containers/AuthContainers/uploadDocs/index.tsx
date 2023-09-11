'use client'
import React from 'react';
import Box from '~/components/Atoms/Box';
import Paper from '~/components/Atoms/Paper';
import { Text } from '~/components/Atoms/Text';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useStore } from '~/store';
import { UploadImage } from '~/components/molecules/inputField';
import { Button } from '~/components/Atoms/Button';

interface FormValues {
  documents: string;
}

const UploadDocuments = () => {

  const store = useStore()
  
  const initialValues: FormValues = {
    documents:'',
  };
  
  const validationSchema = Yup.object({
    documents :  Yup.string().required('Documents Required'),
  });

  const onSubmit = async (inputs: FormValues) => {
    console.log(inputs,"inputs")
    await store.uploadDocumetsAction(inputs)
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });



  return (
        <Paper display='grid' placeItems='center' style={{height:`calc(100vh - 269px)`}} elevation={1}>
          {
            store.user.isDocsVerify ? 
            <Text size='xxlarge' weight='xlarge'>
              Welcome to DashBoard !!!
            </Text>
            : 
            <Box display='grid' placeItems='center' width='400px' gap='30px' textAlign='center'>
              {store.user.isDocsUpload === false && 
                <Text size='large' weight='large'>
                Please upload documents for Verification <br/>
                Farmer
                </Text>
              }
              {store.user.isDocsUpload === false &&
                <form onSubmit={formik.handleSubmit}>
                    <UploadImage
                         multiple
                         id="documents"
                         name="documents"
                         type='file'
                         label='Documents'
                         error={formik.touched.documents}
                         errorMessage={formik.errors.documents}
                         value={formik.values.documents}
                         onChange={formik.handleChange}
                    />
                    <Box display='flex' flexDirection='column' gap='20px' style={{ marginTop: '70px' }}>
                        <Button variant='primary' type="submit">
                            Submit 
                        </Button>
                    </Box>
                </form>
                }
                {store.user.isDocsUpload === true && store.user.isDocsVerify === false &&
                <Box display='grid' placeItems='center' width='400px' gap='30px' textAlign='center'>
                   <Text size='xlarge' weight='xlarge'>
                      Your Documents upload Successfully with in 24 hours your Profile will enable
                    </Text><br/>
                </Box>
                }
            </Box>
          }
        </Paper>
    )
}

export default UploadDocuments