"use client";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarRoot } from "~/components/Atoms/Avathar";
import Box from "~/components/Atoms/Box";
import Paper from "~/components/Atoms/Paper";
import { Text } from "~/components/Atoms/Text";


type Avatarprop = {
  icon?: React.ReactNode
  text?: string
  count?: string

}
export const SellerHomeCard = (props: Avatarprop) => (

  <Paper elevation={1}
    width="250px"
    height="60px"
    display="flex"
    justifyContent="space-around"
    flexDirection="row"
    padding={1}>
   <Box
              minWidth="60px"
              height="40px"
              borderRadius={100}
              style={{ boxShadow: "0px 4px 4px #1EB442" }}
              padding={1.2}
            >
      {props.icon}
    </Box >
    <Box padding={1.3}>
    <Text size="xlarge" weight="xlarge" font-weight="bolder" >{props.count}</Text>
    <Text size="xlarge" weight="xlarge" font-family="sans-serif">{props.text}</Text>
    </Box>
  </Paper>
);