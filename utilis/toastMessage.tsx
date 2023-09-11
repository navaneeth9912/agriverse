import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastSuccessMessage = (msg: string): void => {
  toast.success(msg);
};

export const ToastErrorMessage = (msg: string): void => {
  toast.error(msg);
};

export const ToastDefaultMessage = (msg: string): void => {
  toast(msg);
};

export const ToastInfoMessage = (msg: string): void => {
  toast.info(msg);
};

export const ToastDangerMessage = (msg: string): void => {
  toast.error(msg);
};

export const ToastWarnMessage = (msg: string): void => {
  toast.warn(msg);
};
