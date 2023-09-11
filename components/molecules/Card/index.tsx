import React from "react";
import Box from "~/components/Atoms/Box";
import Paper from "~/components/Atoms/Paper";
import { Text } from "~/components/Atoms/Text";
import Link from "next/link";
import theme from "~/theme";

const DisplayData = (label: string, value: string | number | undefined | null, unit?: string) => {
  return (
    <Box display="flex" alignItems="flex-end">
      <Text size="small" width="100px" weight="large" padding="2px">
        {label}
      </Text>
      <Text padding="2px">:</Text>
      {value ? (
        <Text size="small" width="100px" padding="2px">
          {value} {unit}
        </Text>
      ) : (
        <Text size="small" width="100px" color={theme.colors.redA} padding="2px">
          Not Available
        </Text>
      )}
    </Box>
  );
};

const getsingleData = (data: any, name: string) => {
  console.log(data,"data")
  if (data){  const getdata = data.find((item: any) => item.name === name)?.value;
    return getdata}
 
}

const Card = ({ productData }: { productData: any }) => {

  console.log(productData.quantity)
  
  return (
    <Link href={`singleProduct/${productData.id}`}>
      <Paper elevation={2} width="252px" minHeight="273px" maxHeight="273px" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" gap="5px" cursor="pointer" padding={0.5}>
        <img src={productData.image?.location} alt="productImage" width={240} height={110} />
        <Box textAlign="center" display="flex" flexDirection="column">
          {productData?.name ? (
            <Text size="large" weight="large" padding='0px'>
              {productData?.name}
            </Text>
          ) : (
            <Text color={theme.colors.redA} padding='0px'>No Available</Text>
          )}
          {productData?.minPrice && productData?.maxPrice ? (
            <Text weight="large" padding='0px'>
              {productData.minPrice} - {productData.maxPrice} /- (Per Kg)
            </Text>
          ) : (
            <Text color={theme.colors.redA} padding='0px'>No Available</Text>
          )}
        </Box>
        <Box display="flex" justifyContent="center" flexDirection="column">
          {DisplayData('Variety', getsingleData(productData.productAttributes,'variety'))}
          {DisplayData('Origin', getsingleData(productData.productAttributes,'origin'))}
          {DisplayData('Available Qty', productData.quantity)}
          {DisplayData('Certification', getsingleData(productData.productAttributes,'certificateName'))}
          {DisplayData('CuppingScore', getsingleData(productData.productAttributes,'cuppingScore'))}
        </Box>
      </Paper>
    </Link>
  );
};

export default Card;