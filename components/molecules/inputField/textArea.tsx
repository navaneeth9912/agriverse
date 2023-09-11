import styled from "@emotion/styled";
import React from "react";
import { Text } from "~/components/Atoms/Text";
import theme from "~/theme";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string | undefined | string[];
  error?: boolean | undefined | string | any;
  theme?: any;
  width?: string;
}

const TextAreaWrapper = styled.div<{ width?: string }>`
  position: relative;
  width: ${(props) => props.width || "250px"};
  margin: 10px 0;
`;

const TextAreaInput = styled.textarea<{ theme: any }>`
  all: unset;
  padding: 5px;
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${props => props.theme.colors.blackA};
  font-size: 15px;
  color: ${(props) => props.theme?.colors.blackA};
  resize: vertical;
  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.blackA};
  }
  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.blackA};
  }
`;

const Label = styled.label`
  padding: 0 2px;
  font-size: 12px;
  font-weight: 400;
  color: #000;
`;

const TextError = styled(Text)`
  margin-top: -5px;
`;

const CustomTextArea: React.FC<TextAreaProps> = ({ label, errorMessage, theme, ...rest }) => {
    return (
      <TextAreaWrapper width={rest.width}>
        <Label htmlFor={rest.id}>{label}</Label>
        <TextAreaInput theme={theme} {...rest} placeholder={`Enter ${label}`} />
        {errorMessage && (
          <TextError size="small" color={theme.colors.redA}>
            {errorMessage} 
          </TextError>
        )}
      </TextAreaWrapper>
    );
  };

export default CustomTextArea;