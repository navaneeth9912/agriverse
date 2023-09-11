/** @jsxImportSource @emotion/react */
'use client'
import React from 'react';
import Paper from '~/components/Atoms/Paper';
import Box from '~/components/Atoms/Box';
import { Text } from '~/components/Atoms/Text';
import { MdDelete, MdEdit } from 'react-icons/md';
import theme from '~/theme';
import PopupBox from '~/containers/PopupBox';
import Link from 'next/link';
import { calculateTotalPriceRange } from '~/utilis/calculatePrice';
import { jsx, css } from '@emotion/react';

const cartcent = css`
  @media (max-width:480px){
    justify-content: center;
    max-width: min-content;
}
  `

const DisplayData = (label: string, value: string | number | undefined, unit?: string) => {
  return (
    <Box display="flex">
      <Text size="small" width="100px" weight="large">
        {label}
      </Text>
      <Text>:</Text>
      {value ? (
        <Text size="small" width="120px">
          {value} {unit}
        </Text>
      ) : (
        <Text size="small" width="120px" color={theme.colors.redA}>
          Not Available
        </Text>
      )}
    </Box>
  );
};

const SingleCart = ({ productData, onclick }: { productData: any, onclick: any }) => {
  console.log(productData, "ProductDeatils")
  return (
    <Paper display="flex" flexWrap="wrap" elevation={2} minHeight="180px" maxWidth="800px" justifyContent="space-between" css={cartcent}>
      <img src={productData.productImage} alt="productsImg" width={250} height={180} />
      <Box display="flex" flexWrap="wrap" minHeight="180px" maxWidth="800px" justifyContent="space-between" pr='10px' pt='10px'>
        <Box textAlign="right" width="100%" display='flex' justifyContent='end' zindex={1}>
          <Link href={`edit-cart/${productData.id}`}>
            <MdEdit color={theme.colors.blackA} fontSize="20px" style={{ cursor: 'pointer' }} />
          </Link>
          <PopupBox text='Are you sure to Delete this Order ?' label='deleteCart' onClick={onclick} id={productData.id} />
        </Box>
        <Box width="250px" display="flex" flexDirection="column" alignItems="start" padding={1} justifyContent='center' mt='-30px'>
          {productData?.product?.name ?
            <Text size='xlarge' weight='large' padding="2px">{productData?.product?.name}</Text>
            :
            <Text size='xlarge' weight='large' color={theme.colors.redA} padding="2px" textAlign='center'>Not Available</Text>
          }
          {DisplayData('Origin', productData?.origin)}
          {DisplayData('Available Qty',  productData.product?.quantity-(productData.product?.allocatedQuantity+productData.product?.soldQuantity), 'kg')}
          {DisplayData('Price Range', productData?.product?.minPrice + ' - ' + productData?.product?.maxPrice, 'per kg')}
          {DisplayData('Certification', productData?.certificationDocument)}
          {DisplayData('Cupping Score', productData?.cuppingScore, 'points')}
        </Box>
        <Box width="250px" display="flex" flexDirection="column" alignItems="center" padding={1} gap="20px" justifyContent='center' mt='-30px'>
          <Text size="large" weight="large" padding="2px">
            Order Qty : {productData.quantity} kgs
          </Text>
          <Text size="large" weight="large" padding="2px">
            Price : {calculateTotalPriceRange(productData?.product?.minPrice,productData?.product?.maxPrice,productData.quantity)}
          </Text>
        </Box>
      </Box>
    </Paper>
  );
};

export default SingleCart;
