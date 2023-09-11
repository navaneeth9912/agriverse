"use client";
import styled from "@emotion/styled";
import theme from "~/theme";

type ButtonProps = {
  typea?: "outlined" | "contained" | "other";
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  color?: string;
  width?:string;
  height?:string;
};

const getColor = (props: any) => {
  switch (props) {
    case "primary":
      return theme.colors.secondary
      break;

    case "secondary":
      return theme.colors.redA
      break;

    default:
      return theme.colors.secondary;
      break;
  }
};

export const Button = styled.button<ButtonProps>`
  color:  ${(props) => props.typea === "contained"
    ? props.theme.colors.whiteA
    : getColor(props.variant)};
    
  padding: ${(props) =>
    `${props.theme.gutter * 1}px ${props.theme.gutter * 2}px`};

  border-radius: 100px;
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: ${(props) => props.typea === "contained" ? 'none' : `2px solid ${getColor(props.variant)}`};

  background-color: ${(props) =>
    props.typea === "outlined"
      ? props.theme.colors.whiteA
      : getColor(props.variant)};

  ${(props) => props.size === "small" && `font-size: 12px;`}
  ${(props) => props.size === "medium" && `font-size: 14px;`}
  ${(props) => props.size === "large" && `font-size: 16px;`}
`;

Button.defaultProps = {
  typea: "contained",
  size: "medium",
  height:'40px'
};



