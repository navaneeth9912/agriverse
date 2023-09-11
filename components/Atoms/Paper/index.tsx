"use client";
import styled from "@emotion/styled";
import theme from '~/theme'

type PaperProps = {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  placeItems?:string;
  flexWrap?: string;
  gap?:string;
  backgroundColor?: string;
  width?: string;
  minWidth?:string;
  maxWidth?:string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  padding?: number;
  margin?: number;
  elevation?:number;
  borderRadius?:number;
  [x: string]: any;
};

const Paper = styled.div<PaperProps>`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  height: ${(props) => props.height || "100%"};
  border-radius: ${(props) => props.borderRadius}px;

  ${(props) => props.padding && { padding: props.padding * props.theme.gutter }};
  ${(props) => props.margin && { margin: props.margin * props.theme.gutter }};
  ${(props) => props.elevation && { boxShadow: theme.elevations[props.elevation] }};
  
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

Paper.defaultProps = {
  backgroundColor:theme.colors.whiteA
};

export default Paper;

