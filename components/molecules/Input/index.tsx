import styled from "@emotion/styled";
import React, { useState } from "react";
import { Theme } from "@emotion/react";
import { Text } from "~/components/Atoms/Text";


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?:string;
  error?:boolean | undefined | string;
  theme?: Theme;
}

export const InputWrapper = styled.div`
  position: relative;
  height: 45px;
  width:250px;
`;

export const Input = styled.input<InputProps>(({ theme,error }) => ({
  all: "unset",
  height: 25,
  lineHeight: 1,
  padding:'0px 5px',
  boxSizing: "border-box",
  width: "100%",
  border: "none",
  outline: "none",
  borderBottom: `1px solid #000`,
  fontSize: 15,
  color: theme?.colors.blackA[0],
  backgroundColor: "#fff",
  "&::selection": {
    backgroundColor: theme?.colors.blackA[9],
    color: "white",
  },
  "&:hover": {
    borderBottom: `1px solid black`,
  },
  "&:focus": {
    borderBottom: `2px solid black`,
  },
}));

export const Label = styled.label<any>`
  position: absolute;
  top: -5px;
  left: 3px;
  background-color: #fff;
  padding: 0 2px;
  font-size: 12px;
  font-weight:400;
  color: #000;
  pointer-events: none;
  transform: translateY(${(props) => (!props.isFocused && !props.value ? "70%" : "-70%" )});
  transition: all 0.2s ease-out;
`;

const CustomInput: React.FC<InputProps> = ({ label, errorMessage, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <InputWrapper>
      <Input {...rest} onFocus={handleFocus} onBlur={handleBlur} />
      <Label htmlFor={rest.id} label={label} isFocused={isFocused} value={rest.value} error={rest.error}>
        {label}
      </Label>
      {rest.error && <Text size="small" style={{color:'red',marginTop:'-5px'}}>{errorMessage}</Text>}
    </InputWrapper>
  );
};

export default CustomInput;