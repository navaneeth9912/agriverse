"use client";
import styled from "@emotion/styled";
import theme from '~/theme'

type BoxProps = {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  gap?:string;
  placeItems?:string;
  backgroundColor?: string;
  width?: string;
  minWidth?:string;
  maxWidth?:string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  padding?: number;
  margin?: number;
  borderRadius?:number;
  textAlign?:string;
  [x: string]: any;
};

const Box = styled.div<BoxProps>`
  background: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  text-align: ${(props) => props.textAlign};
  border-radius: ${(props) => props.borderRadius}px;

  ${(props) => props.padding && { padding: props.padding * props.theme.gutter }};
  ${(props) => props.margin && { margin: props.margin * props.theme.gutter }};
  
  ${(props) =>
    props.display &&
    `display : ${props.display};
      flex-direction: ${props.flexDirection};
      justify-content: ${props.justifyContent};
      justify-items:${props.justifyItems};
      place-items:${props.placeItems};
      align-items: ${props.alignItems};
      flex-wrap: ${props.flexWrap};
      gap: ${props.gap};
    `}
`;
Box.defaultProps = {
  backgroundColor:theme.colors.whiteA
};

export default Box;

