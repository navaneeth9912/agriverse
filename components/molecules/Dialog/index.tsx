import styled from "@emotion/styled";
import * as Dialog from "@radix-ui/react-dialog";
import { keyframes } from "@emotion/react";
type DialogProps = {
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
const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const DialogOverlay = styled(Dialog.Overlay)((props) => ({
  backgroundColor: props.theme.colors.blackA[9],
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex:100,
}));

export const DialogContent = styled(Dialog.Content)<DialogProps>((props) => ({
  backgroundColor: props.bgColor ? props.bgColor : "white",
  borderRadius: props.br ? props.br : 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: props.width ? props.width : "90vw",
  maxWidth: props.maxWidth ? props.maxWidth : "500px",
  maxHeight: props.maxHeight ? props.maxHeight : "85vh",
  padding: props.pd ? props.pd : 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  "&:focus": { outline: "none" },
  zIndex:3,
  paddingLeft: props.pl,
  paddingRight: props.pr,
  paddingTop: props.pt,
  paddingBottom: props.pb,
  marginBottom: props.mb,
  marginLeft: props.ml,
  marginRight: props.mr,
  marginTop: props.mt,
  color: props.color ? props.color : "black",
}));

export const DialogTitle = styled(Dialog.Title)<DialogProps>((props) => ({
  margin: 0,
  fontWeight: 500,
  color: props.color ? props.color : props.theme.colors.blackA[9],
  fontSize: "14px",
  padding: props.pd,
  paddingLeft: props.pl,
  paddingRight: props.pr,
  paddingTop: props.pt,
  paddingBottom: props.pb,
  marginBottom: props.mb,
  marginLeft: props.ml,
  marginRight: props.mr,
  marginTop: props.mt,
}));

export const DialogDescription = styled(Dialog.Description)<DialogProps>(
  (props) => ({
    margin: "10px 0 20px",
    color: props.color ? props.color : props.theme.colors.blackA[9],
    fontSize: "14px",
    lineHeight: 1.5,
    padding: props.pd,
    paddingLeft: props.pl,
    paddingRight: props.pr,
    paddingTop: props.pt,
    paddingBottom: props.pb,
    marginBottom: props.mb,
    marginLeft: props.ml,
    marginRight: props.mr,
    marginTop: props.mt,
  })
);
