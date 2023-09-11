import React from 'react';
import NextLink from 'next/link';
import { Text } from '../Text';

type CustomLinkProps = {
    url: any,
    text: string,
    color?: string,
    size?:string,
    weight?:string,
}

const CustomLink = (props: CustomLinkProps) => {
  return (
    <NextLink href={props.url} style={{cursor:'pointer'}}>
      <Text color={props?.color}>{props.text}</Text>
    </NextLink>
  )
}

export default CustomLink;