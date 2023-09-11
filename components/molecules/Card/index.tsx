// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Box from "~/components/Atoms/Box";
import Paper from "~/components/Atoms/Paper";
import { Text } from "~/components/Atoms/Text";

interface ProductCard {
  id: number;
  name: String;
  origin: string;
  Certification: string;
  AvailableQty: number;
  CuppingScore: number;
  image: string;
  price: number;
}

interface PersonComponentProps {
  productData: ProductCard;
}

const Card: React.FC<PersonComponentProps> = ({ productData }) => {
  return (
    <Link href={`/${productData.id}`}>
      <Paper
        key={productData.id}
        elevation={1}
        width="230px"
        height="240px"
        borderRadius={4}
      >
        <Box
          display="flex"
          flexDirection="column"
          width="230px"
          alignItems="center"
        >
          <Box width="220px" height="110px">
            <img
              width={220}
              height={110}
              src={productData?.image}
              alt="Product Image"
            />
          </Box>
          <Text size="large" weight="large" padding="2px">
            {productData?.name}
          </Text>
          <Text size="medium" weight="large" padding="2px">
            {productData?.price} /-(per kg)
          </Text>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Box display="flex">
              <Text size="small" width="100px">
                Origin
              </Text>
              <Text>:</Text>
              {productData?.origin ? (
                <Text size="small">{productData?.origin}</Text>
              ) : (
                <Text size="small">Not AVailable</Text>
              )}{" "}
            </Box>
            <Box display="flex">
              <Text size="small" width="100px">
                Available Qty
              </Text>
              <Text>:</Text>
              {productData?.AvailableQty ? (
                <Text size="small">{productData?.AvailableQty}</Text>
              ) : (
                <Text size="small">Not AVailable</Text>
              )}
            </Box>
            <Box display="flex">
              <Text size="small" width="100px">
                Certification
              </Text>
              <Text>:</Text>
              {productData?.Certification ? (
                <Text size="small">{productData?.Certification}</Text>
              ) : (
                <Text size="small">Not AVailable</Text>
              )}{" "}
            </Box>
            <Box display="flex">
              <Text size="small" width="100px">
                Cupping Score
              </Text>
              <Text>:</Text>
              {productData?.CuppingScore ? (
                <Text size="small">{productData?.CuppingScore}</Text>
              ) : (
                <Text size="small">Not AVailable</Text>
              )}{" "}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Link>
  );
};

export default Card;
