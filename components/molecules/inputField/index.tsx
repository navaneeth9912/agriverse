"use client";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { Theme } from "@emotion/react";
import { IconsList } from "~/components/Atoms/Icons";
import { Text } from "~/components/Atoms/Text";
import theme from "~/theme";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string | undefined | string[];
  error?: boolean | undefined | string | any;
  theme?: Theme;
  width?: string;
  disabled?: boolean;
}

export interface CustomSelectProps extends InputProps {
  options?: {} | any;
}
interface InputWrapperProps {
  width?: string;
}

// InputWrapper Style
const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  height: 40px;
  width:${(props) => props.width};
  display: grid;
  align-items: stretch;
  back
  `;

InputWrapper.defaultProps = {
  width: "250px",
};

// Select Style
const Input = styled.input<any>(({ theme }) => ({
  all: "unset",
  height: 30,
  lineHeight: 1,
  padding: "5px",
  boxSizing: "border-box",
  width: "100%",
  border: "none",
  outline: "none",
  borderBottom: `1px solid ${theme.colors.blackA}`,
  fontSize: 15,
  color: theme?.colors.blackA,
  "&::selection": {
    backgroundColor: theme?.colors.blackA,
    color: `${theme.colors.whiteA}`,
  },
  "&:hover": {
    borderBottom: `1px solid ${theme.colors.blackA}`,
  },
  "&:focus": {
    borderBottom: `2px solid ${theme.colors.blackA}`,
  },
}));

// Select Style
const SelectInput = styled.select<any>(({ theme }) => ({
  all: "unset",
  height: 30,
  lineHeight: 1,
  padding: "5px",
  boxSizing: "border-box",
  width: "100%",
  border: "none",
  outline: "none",
  borderBottom: `1px solid ${theme.colors.blackA}`,
  fontSize: 15,
  color: theme?.colors.blackA,
  "&::selection": {
    backgroundColor: theme?.colors.blackA,
    color: `${theme.colors.whiteA}`,
  },
  "&:hover": {
    borderBottom: `1px solid ${theme.colors.blackA}`,
  },
  "&:focus": {
    borderBottom: `2px solid ${theme.colors.blackA}`,
  },
}));

export const Label = styled.label<any>`
  padding: 0 2px;
  font-size: 12px;
  font-weight: 400;
  color: #000;
  pointer-events: none;
`;

// Icon Wrapper
const IconWrapper = styled.span<{ pointerEvents?: "none" }>`
  position: absolute;
  right: 5px;
  width: 20px;
  height: 20px;
  color: #000;
  top: 45%;
  cursor: pointer;
  transform: translateY(-50%);
  pointer-events: ${(props) =>
    props.pointerEvents === "none" ? "none" : "auto"};
`;

// Normal Input Atom
export const CustomInput: React.FC<InputProps> = ({
  label,
  errorMessage,
  ...rest
}) => {
  return (
    <InputWrapper width={rest.width}>
      <Label
        htmlFor={rest.id}
        label={label}
        value={rest.value}
        error={rest.error}
      >
        {label}{" "}
        {rest.required === true && (
          <span color={theme.colors.redA}>
            <strong>*</strong>
          </span>
        )}
      </Label>
      <Input
        {...rest}
        value={rest.value}
        disabled={rest.disabled}
        placeholder={`Enter ${label}`}
      />
      {rest.error && (
        <Text
          size="small"
          color={theme.colors.redA}
          style={{ marginTop: "-5px" }}
        >
          {errorMessage}
        </Text>
      )}
    </InputWrapper>
  );
};

// Select Input Atom
export const CustomSelectInput1: React.FC<CustomSelectProps> = ({
  label,
  errorMessage,
  options,
  ...rest
}) => {
  return (
    <InputWrapper width={rest.width}>
      <Label
        htmlFor={rest.id}
        label={label}
        value={rest.value}
        error={rest.error}
      >
        {label}{" "}
        {rest.required === true && (
          <span color={theme.colors.redA}>
            <strong>*</strong>
          </span>
        )}
      </Label>
      <SelectInput {...rest} value={rest.value} placeholder={`Select ${label}`}>
        <option value="" disabled style={{ color: "gray" }}>
          {/* {`Select ${label}`} */}
        </option>
        {Object.keys(options).map((key) => (
          <option key={key} value={key}>
            {options[key]}
          </option>
        ))}
        ;
      </SelectInput>
      <IconWrapper pointerEvents="none">
        <IconsList.FiChevronDown />
      </IconWrapper>
      {rest.error && (
        <Text
          size="small"
          color={theme.colors.redA}
          style={{ marginTop: "-5px" }}
        >
          {errorMessage}
        </Text>
      )}
    </InputWrapper>
  );
};
//dropdown
export const CustomSelectInput: React.FC<CustomSelectProps> = ({
  label,
  errorMessage,
  options,
  ...rest
}) => {
  return (
    <InputWrapper width={rest.width}>
      <Label
        htmlFor={rest.id}
        label={label}
        value={rest.value}
        error={rest.error}
      >
        {label}{" "}
        {rest.required === true && (
          <span color={theme.colors.redA}>
            <strong>*</strong>
          </span>
        )}
      </Label>
      <SelectInput {...rest} value={rest.value} placeholder={`Select ${label}`}>
        <option value=""></option>
        {options?.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectInput>
      <IconWrapper pointerEvents="none">
        <IconsList.FiChevronDown />
      </IconWrapper>
      {rest.error && (
        <Text size="small" color={theme.colors.redA} margin="-5px 0px 0px">
          {errorMessage}
        </Text>
      )}
    </InputWrapper>
  );
};

// Password input Atom
export const CustomPasswordInput: React.FC<InputProps> = ({
  label,
  errorMessage,
  type = "text",
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <InputWrapper width={rest.width}>
      <Label
        htmlFor={rest.id}
        label={label}
        value={rest.value}
        error={rest.error}
      >
        {label}
      </Label>
      <Input
        {...rest}
        type={showPassword ? "text" : type}
        placeholder={`Enter ${label}`}
      />
      <IconWrapper onClick={handleTogglePassword}>
        {showPassword ? (
          <IconsList.FiEyeOff color="#000" fontSize="18px" />
        ) : (
          <IconsList.FiEye color="#000" fontSize="18px" />
        )}
      </IconWrapper>
      {rest.error && (
        <Text
          size="small"
          color={theme.colors.redA}
          style={{ marginTop: "2px" }}
        >
          {errorMessage}
        </Text>
      )}
    </InputWrapper>
  );
};

export const UploadImage: React.FC<InputProps> = ({
  label,
  errorMessage,
  ...rest
}) => {
  console.log(errorMessage, "errorMessagein Auto");
  return (
    <InputWrapper width={rest.width}>
      <Label
        htmlFor={rest.id}
        label={label}
        value={rest.value}
        error={rest.error}
      >
        {label}{" "}
        {rest.required === true && (
          <span color={theme.colors.redA}>
            <strong>*</strong>
          </span>
        )}
      </Label>
      <Input {...rest} type="file" />
      <IconWrapper>
        <IconsList.FiUpload />
      </IconWrapper>
      {errorMessage && (
        <Text
          size="small"
          color={theme.colors.redA}
          style={{ marginTop: "-5px" }}
        >
          {errorMessage}
        </Text>
      )}
    </InputWrapper>
  );
};

type CustomCheckboxProps = {
  label: string;
  checked: boolean;
  possible: boolean;
  onChange?: () => void;
};

const CheckboxContainer = styled.label<{ possible: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: ${(props) => (props.possible ? "pointer" : "not-allowed")};
  min-width: 50%;
`;

const StyledCheckbox = styled.input<{ checked: boolean; possible: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid #000;
  accent-color: ${(props) => (props.checked ? "#000" : "#fff")};
  cursor: ${(props) => (props.possible ? "pointer" : "not-allowed")};
  background: "none";
`;

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked,
  possible,
  onChange,
}) => {
  return (
    <CheckboxContainer possible={possible}>
      <StyledCheckbox
        checked={checked}
        possible={possible}
        type="checkbox"
        onChange={onChange}
        disabled={!possible}
      />
      <Text>{label}</Text>
    </CheckboxContainer>
  );
};
