/** @jsxImportSource @emotion/react */

'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Paper from '~/components/Atoms/Paper';
import Filters from '~/containers/Filter';
import { CustomInput, CustomSelectInput } from '../inputField';
import { Button } from '~/components/Atoms/Button';
import Box from '~/components/Atoms/Box'
import { useContext } from 'react';
import { StoreContext } from '~/src/models';
import Link from 'next/link';
import { ApplicationConstant } from '~/constant/applicationConstant';
import { jsx,css } from '@emotion/react';

// interface FormValues {
//   search: string;
// }

const OrdersQuotationSubHead = ({search,handleSearch}:{search:string,handleSearch:any}) => {
  const store = useContext(StoreContext)

  const orderheight = css`
@media (max-width:480px){
    display:flex;
    gap: 30px;
    
   
 }
`
const dis = css`
@media (max-width:480px){
    display:flex;
  flex-direction: column;
    
 }
`

  return (
    <Paper
    css={orderheight}
      borderRadius={0}
      elevation={1}
      minHeight="50px"
      minWidth="100%"
      display="flex"
      alignItems="center"
      justifyContent='space-between'
      flexWrap='wrap'
      pl={"10px"}
      pr={"10px"}
    >
        <Box  mt='-8px' display='flex' gap='20px' css={dis}>
          <CustomInput
            id="search"
            name="search"
            label="Search"
            value={search}
            onChange={(e)=>handleSearch(e)}
          />
          <CustomSelectInput
            id="status"
            name="status"
            label="Status"
            value={search}
            onChange={(e)=>handleSearch(e)}
          />
      </Box>
        <Button variant='primary' height='35px' width='160px'>
           Search
        </Button>
    </Paper>
  );
};

export default OrdersQuotationSubHead;

