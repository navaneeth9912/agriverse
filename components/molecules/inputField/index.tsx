'use client'
import styled from "@emotion/styled";
import React, { useState } from "react";
import { Theme } from "@emotion/react";
import { IconsList } from "~/components/Atoms/Icons";
import { Text } from "~/components/Atoms/Text";
import theme from "~/theme";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string | undefined | string[];
    error?: boolean | undefined | string;
    theme?: Theme;
    width?: string;
    disabled?:boolean;
}

export interface CustomSelectProps extends InputProps {
    options?: string[] | undefined;
}

// InputWrapper Style
export const InputWrapper = styled.div`
  position: relative;
  height: 40px;
  width:250px;
  display: grid;
  align-items: stretch
  `;



// Select Style
const Input = styled.input<any>(({ theme }) => ({
    all: "unset",
    height: 30,
    lineHeight: 1,
    padding: '5px',
    boxSizing: "border-box",
    width: "100%",
    border: "none",
    outline: "none",
    borderBottom: `1px solid ${theme.colors.blackA}`,
    fontSize: 15,
    color: theme?.colors.blackA,
    backgroundColor: `${theme.colors.whiteA}`,
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
    padding: '5px',
    boxSizing: "border-box",
    width: "100%",
    border: "none",
    outline: "none",
    borderBottom: `1px solid ${theme.colors.blackA}`,
    fontSize: 15,
    color: theme?.colors.blackA,
    backgroundColor: `${theme.colors.whiteA}`,
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


// Label Style
export const Label = styled.label<any>`
  position: absolute;
  top: 0px;
  left: 3px;
  padding: 0 2px;
  font-size: 12px;
  font-weight:400;
  color: #000;
  pointer-events: none;
  transform: translateY(${(props) => (!props.isFocused && !props.value ? "70%" : "-80%")});
  transition: all 0.2s ease-out;
`;

// Icon Wrapper
const IconWrapper = styled.span<{ pointerEvents?: 'none' }>`
  position: absolute;
  right: 5px;
  width: 20px;
  height: 20px;
  color: #000;
  top: 45%;
  cursor: pointer;
  transform: translateY(-50%);
  pointer-events: ${(props) => (props.pointerEvents === 'none' ? 'none' : 'auto')};
`;



// Normal Input Atom
export const CustomInput: React.FC<InputProps> = ({ label, errorMessage, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    console.log(rest.disabled,"diaidawd")

    return (
        <InputWrapper>
            <Input {...rest} value={rest.value} onFocus={handleFocus} onBlur={handleBlur} disabled={rest.disabled}/>
            <Label htmlFor={rest.id} label={label} isFocused={isFocused} value={rest.value} error={rest.error}>
                {label}
            </Label>
            {rest.error && <Text size="small" color={theme.colors.redA} style={{ marginTop: '-5px' }}>{errorMessage}</Text>}
        </InputWrapper>
    );
};


// Select Input Atom
export const CustomSelectInput: React.FC<CustomSelectProps> = ({ label, errorMessage, options, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleSelectChange = (event: any) => {
        rest.onChange && rest.onChange(event);
    };

    return (
        <InputWrapper>
            <SelectInput {...rest} onFocus={handleFocus} onBlur={handleBlur} value={rest.value} onChange={handleSelectChange}>
                <option value=''>
                </option>
                {options?.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </SelectInput>
            <IconWrapper pointerEvents='none'>
                <IconsList.FiChevronDown />
            </IconWrapper>
            <Label htmlFor={rest.id} label={label} isFocused={isFocused} value={rest.value} error={rest.error}>
                {label}
            </Label>
            {rest.error && <Text size="small" color={theme.colors.redA} style={{ marginTop: '-5px' }}>{errorMessage}</Text>}
        </InputWrapper>
    );
};


// Password input Atom
export const CustomPasswordInput: React.FC<InputProps> = ({ label, errorMessage, type = 'text', ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleTogglePassword = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <InputWrapper>
            <Input {...rest} type={showPassword ? 'text' : type} onFocus={handleFocus} onBlur={handleBlur} />
            <IconWrapper onClick={handleTogglePassword}>
                {showPassword ? <IconsList.FiEyeOff color='#000' fontSize='18px' /> : <IconsList.FiEye color='#000' fontSize='18px' />}
            </IconWrapper>
            <Label htmlFor={rest.id} label={label} isFocused={isFocused} value={rest.value} error={rest.error}>
                {label}
            </Label>
            {rest.error && <Text size="small" color={theme.colors.redA} style={{ marginTop: '-5px' }}>{errorMessage}</Text>}
        </InputWrapper>
    );
};


// Upload file atom
export const LabeUpload = styled.label<any>`
  position: absolute;
  top: -15px;
  left: 3px;
  background-color: #fff;
  padding: 0 2px;
  font-size: 12px;
  font-weight: 400;
  color: #000;
  pointer-events: none;
`;

export const UploadImage: React.FC<InputProps> = ({ label, errorMessage, ...rest }) => {
    return (
        <InputWrapper>
            <Input {...rest} type='file'/>
            <LabeUpload htmlFor={rest.id} label={label} value={rest.value} error={rest.error}>
                {label}
            </LabeUpload>
            <IconWrapper>
                <IconsList.FiUpload />
            </IconWrapper>
            {rest.error && <Text size="small" color={theme.colors.redA} style={{ marginTop: '-5px' }}>{errorMessage}</Text>}
        </InputWrapper>
    );
};

type CustomCheckboxProps = {
    label: string;
    checked: boolean;
    possible: boolean;
    onChange: () => void;
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
  background:'none'
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