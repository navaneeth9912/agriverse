'use client'
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as Accordion from '@radix-ui/react-accordion';
import React from 'react';


type AccordianProps = {
    bgColor: string;
    color: string;
    br: number;
    bs: any;
    width: any;
    maxWidth: any;
    maxHeight: any;
    pd: number;
    pb: number;
    pt: number;
    pl: number;
    pr: number;
    m: number;
    mb: number;
    mt: number;
    ml: number;
    mr: number;
    size?: "small" | "medium" | "large";
  };

interface AccordionItem {
  value: string;
  trigger: string;
  content: string;
}

export const AccordionRoot = styled(Accordion.Root)<AccordianProps>((props:any)=>({
    width:props.width,
    backgroundColor:props.bgColor?props.bgColor:"white",
      boxShadow:"0 2px 2px black"


}))
//   width: $;
//   background-color: ${mauve.mauve6};
//   box-shadow: 0 2px 10px ${blackA.blackA4};
//   border:none;
// `;

export const AccordionItem = styled(Accordion.Item)<AccordianProps>`
  // box-shadow: 0 2px 10px ${"black"};

  overflow: hidden;
  margin-top: 10px;

  &:first-child {
    margin-top: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:focus-within {
    position: relative;
    z-index: 1;
  }
`;

export const AccordionTrigger: React.FC<React.ComponentPropsWithoutRef<typeof StyledTrigger>> = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      <StyledTrigger {...props}>
        {children}
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  )
);

export const AccordionContent: React.FC<React.ComponentPropsWithoutRef<typeof StyledContent>> = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  )
);

export const StyledHeader = styled(Accordion.Header)`
  all: unset;
  display: flex;
`;

export const StyledTrigger = styled(Accordion.Trigger)`
all: unset;
font-family: inherit;
background-color: transparent;
padding: 0 20px;
height: 45px;
flex: 1;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 15px;
line-height: 1;
color: ${"red"};
box-shadow: 0 1px 0 ${"grey"};
background-color: white;

`;

export const StyledChevron = styled(ChevronDownIcon)`
  color: ${"black"};
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);

  &[data-state='open'] {
    transform: rotate(180deg);
  }
`;

export const slideDown = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`;

export const slideUp = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`;

export const StyledContent = styled(Accordion.Content)`
  overflow: hidden;
  font-size: 15px;
  color: ${"grey"};

  &[data-state='open'] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state='closed'] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;

export const StyledContentText = styled('div')`
  padding: 15px 20px;
`;

