/** @jsxImportSource @emotion/react */

'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Paper from '~/components/Atoms/Paper';
import Filters from '~/containers/Filter';
import { CustomInput } from '../inputField';
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

const ProductsSubHead = ({search,handleSearch,handleClear,handleCheckboxChange,formik,applyFilter}:{search:string,handleSearch:any,handleClear:any,handleCheckboxChange:any,formik:any,applyFilter:any}) => {
  const store = useContext(StoreContext)

  // const initialValues: FormValues = {
  //   search: ''
  // };

  // const validationSchema = Yup.object({
  //   search: Yup.string()
  // });

  // const onSubmit = async (inputs: FormValues) => {
  //   console.log(inputs);
  // };

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema,
  //   onSubmit
  // });

  const productStyle = css`
  @media(max-width:480px){
    min-height:100px;
  }
  `

  return (
    <Paper
    css = {productStyle}
    position="sticky" top='62px'
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
      <Box display="flex"  gap='10px'>
        {store.loggedInUser.userRole === 'BUYER' && <Filters handleCheckboxChange={handleCheckboxChange} handleClear={handleClear} formik={formik} applyFilter={applyFilter}/>}
        <Box  mt='-8px'>
          <CustomInput
            id="search"
            name="search"
            label="Search"
            value={search}
            onChange={(e)=>handleSearch(e)}
            // onBlur={formik.handleBlur}
          />
        </Box>
      </Box>
      {store.loggedInUser.userRole === 'BUYER' ? 
        <Link href={ApplicationConstant.NEWQUOTATION_URL_PATH}>
        <Button variant='primary' height='35px' width='160px'>
           Add Quote
        </Button>
        </Link>
         : 
        <Link href={ApplicationConstant.ADDPRODUCT_URL_PATH}>
        <Button variant='primary' height='35px' width='160px'>
            Add Product
        </Button>
        </Link>
      }
    </Paper>
  );
};

export default ProductsSubHead;

