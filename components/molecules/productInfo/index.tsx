/** @jsxImportSource @emotion/react */
// Import necessary dependencies
import React, { useState } from 'react';
import Box from '~/components/Atoms/Box';
import { Text } from '~/components/Atoms/Text';
import theme from '~/theme';
import { CircularProgress } from '~/components/Atoms/Loading';
import { getsingleData } from '~/utilis/getSingleData';
import { jsx,css } from '@emotion/react';

const MwidthColon =css`
@media (max-width:480px){
  width:2px;
 }
`
const keyData = css`
@media (max-width:480px){
  width:125px;
 }
`
const valueData = css`
@media (max-width:480px){
white-space: break-spaces;
word-break: break-all;
}
`
const mainDiv = css`
@media (max-width:480px){
 align-items:flex-start;
  }
`


function formatCamelCaseString(input: string): string {
  const formattedString = input.replace(/([A-Z])/g, ' $1');
  return formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
}

const DisplayData = (
  label: string | any,
  value: string | number | undefined | null | any,
  unit?: string
) => {
  return (
    label !== 'seller' && label !== "description" && label !== "product" && label !== 'Cuppingscoredoc' && label !== 'Certificationcoredoc' && (
      <Box display="flex"  css={mainDiv}>
        <Text css={keyData} width="180px" weight="medium">
          {formatCamelCaseString(label)}
        </Text>
        <Text css={MwidthColon} width="30px">:</Text>
        {value ? (
          <Text css= {valueData} width="200px">
            {value} {unit}
          </Text>
        ) : (
          <Text css= {valueData} width="200px" color={theme.colors.redA}>
            Not Available
          </Text>
        )}
      </Box>
    )
  );
};

function SingleProductInfo({ list }: any) {

  console.log(list, "List of product data------------>")

  const imageAlign = css`
  @media (max-width:480px){
    flex-direction:column;
    width:100%;
   }
  `
  const productDesc = css`
  @media (max-width:480px){
    width:fit-content;
    align-items:flex-start;
   }
  `


  return (
    <>
      <Box
      css={imageAlign}
        display="flex"
        flexDirection="row"
        width="100%"
        justifyContent="start"
        alignItems="start"
        flexWrap="wrap"
      >
        <Box
          width="50%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="12px"
        >
          {list?.product?.name ? (
            <Text size="xlarge" weight="large">
              {list?.product?.name}
            </Text>
          ) : (
            <Text size="xlarge" weight="large" color={theme.colors.redA}>
              Not Available
            </Text>
          )}
          <img
            src={list.product?.image?.location}
            height="370px"
            width={'475px'}
            alt="Product"
          />
        </Box>
        <Box
        css={productDesc}
          width="50%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="20px"
          alignItems="center"
        >
          <Text size="large" weight="large" textAlign="center">
            Product Details
          </Text>
          <hr style={{ borderTop: '3px solid #1EB442', width: '396px' }} />
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            {DisplayData('Product Name', list?.product?.name)}
            {list?.product?.productAttributes.map((item1: any) => (
              DisplayData(item1.name, item1.value)
            ))}
            {list.product?.quantity && DisplayData('Available Quantity', list.product?.quantity - (list.product?.allocatedQuantity + list.product?.soldQuantity))}
            {DisplayData('Price Per Kg', `${list?.product?.minPrice + ' - ' + list?.product?.maxPrice}/-`)}
          </Box>
          <hr style={{ borderTop: '3px solid #1EB442', width: '396px' }} />
        </Box>
      </Box>
    </>
  );
}

export default SingleProductInfo;
