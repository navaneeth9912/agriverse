"use client";
import styled from "@emotion/styled";
import theme from "~/theme";
import React from 'react'
import Box from "~/components/Atoms/Box";
import { Text } from "~/components/Atoms/Text";

type ProfileNameprops={
    text?:string
    icon?:any
};



const Authicon = (props:ProfileNameprops) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Text size="large">  {props.icon}</Text>  
      <Text size="large">{props.text}</Text>  
    </Box>
  )
}

export default Authicon;
