"use client";
import React, { useContext, useState } from "react";
import Box from "~/components/Atoms/Box";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Text } from "~/components/Atoms/Text";
import {
  CustomInput,
  CustomPasswordInput,
} from "~/components/molecules/inputField";
import { Button } from "~/components/Atoms/Button";
import theme from "~/theme";
import CustomLink from "~/components/Atoms/Link/index";
// import { useStore } from '~/store';
import { useRouter } from "next/navigation";
import { StoreContext } from "~/src/models";
import { ToastDangerMessage, ToastSuccessMessage } from "~/utilis/toastMessage";

interface FormValues {
  email: string;
  otp: string;
  password: string;
  confirmPassword: string;
  isotpverified: boolean;
}

enum ForgotPasswordSteps {
  GET_OTP = "GET_OTP",
  OTP_VERIFY = "OTP_VERIFY",
  UPDATE_PASSWORD = "UPDATE_PASSWORD",
  SUCCESS_MESSAGE = "SUCCESS_MESSAGE",
}

const ForgotPasswordForm = () => {
  const router = useRouter();
  const store = useContext(StoreContext);
  const [step, setStep] = useState<ForgotPasswordSteps>(
    ForgotPasswordSteps.GET_OTP
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const initialValues: FormValues = {
    email: "",
    otp: "",
    isotpverified: false,
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email Address")
      .required("Email Required"),
    otp:
      step === ForgotPasswordSteps.OTP_VERIFY
        ? Yup.string().required("OTP Required")
        : Yup.string(),
    password:
      step === ForgotPasswordSteps.UPDATE_PASSWORD
        ? Yup.string()
          .required("Password Required")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password Requires 1 Uppercase, 1 Lowercase, 1 Number, 1 Special, 8 Characters."
          )
        : Yup.string(),
    confirmPassword:
      step === ForgotPasswordSteps.UPDATE_PASSWORD
        ? Yup.string()
          .oneOf([Yup.ref("password")], "Passwords Must Match")
          .required("Confirm Password Required")
        : Yup.string(),
    isotpverified: Yup.boolean(),
  });

  const onSubmit = async (inputs: FormValues) => {
    switch (step) {
      case ForgotPasswordSteps.GET_OTP:
        try {
          setLoading(true);
          const data = await store.mutateSendOtpForForgetPassword({
            email: inputs.email,
          });
          ToastSuccessMessage(`OTP Sent`);
          setStep(ForgotPasswordSteps.OTP_VERIFY);
          setError("");
          return;
        } catch (error) {
          console.log(error, "error in get otp in forgotpassword");
          const errorWithMessage = error as { message: string }[];
          const errorMessage =
            errorWithMessage[0]?.message || "An error occurred";
          console.log("error in get otp in forgotpassword");
          setError(errorMessage);
          ToastDangerMessage(errorMessage);
          return;
        }
        break;
      case ForgotPasswordSteps.OTP_VERIFY:
        try {
          const data = await store.mutateVerifyOTP({
            email: inputs.email,
            otp: Number(inputs.otp),
          });
          ToastSuccessMessage("OTP  Verified Successfully");
          setStep(ForgotPasswordSteps.UPDATE_PASSWORD);
          setError("");
          return;
        } catch (error) {
          const errorWithMessage = error as { message: string }[];
          const errorMessage =
            errorWithMessage[0]?.message || "An error occurred";
          setError(errorMessage);
          ToastDangerMessage(errorMessage);
          return;
        }
        break;
      case ForgotPasswordSteps.UPDATE_PASSWORD:
        try {
          const data = await store.mutateSetNewPassword({
            email: inputs.email,
            password: inputs.password,
          });
          ToastSuccessMessage("Password Reset Successful!");
          setStep(ForgotPasswordSteps.SUCCESS_MESSAGE);
          setError("");
          return;
        } catch (error) {
          const errorWithMessage = error as { message: string }[];
          const errorMessage =
            errorWithMessage[0]?.message || "An error occurred";
          setError(errorMessage);
          ToastDangerMessage(errorMessage);
          return;
        }
        break;
      case ForgotPasswordSteps.SUCCESS_MESSAGE:
        break;
      default:
        break;
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleGoSignIn = () => {
    router.push("/signin");
  };

  const handleBack = () => {
    // if (step === ForgotPasswordSteps.OTP_VERIFY) {
    // }
    setStep(ForgotPasswordSteps.GET_OTP);
    setError("");
  };

  // const handleOtp = (email:any) =>{
  //     if(step == ForgotPasswordSteps.GET_OTP) {
  //         store.mutateSendOtpForForgetPassword(email)
  //     }
  // }

  const resendOTP = async () => {
    try {
      const data = await store.queryGenerateOTP({
        email: formik.values.email,
      });
      ToastSuccessMessage(`OTP Sent!`);
    } catch (error) {
      ToastDangerMessage("Some Error occurred. Please try again.");
    }
  };

  return (
    <Box>
      {step === ForgotPasswordSteps.GET_OTP && (
        <form onSubmit={formik.handleSubmit}>
          <Box textAlign="center">
            {error && <Text color={theme.colors.redA}>{error}</Text>}
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap="30px"
            width="100%"
            padding={1}
          >
            <Box textAlign="center" display="grid">
              <Text size="large" weight="large">
                Enter Your Email
              </Text>
            </Box>
            <CustomInput
              id="email"
              name="email"
              label="Email"
              error={formik.touched.email}
              errorMessage={formik.errors.email}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <Box display="grid" gap="20px" style={{ marginTop: "20px" }}>
              <Button variant="primary" type="submit">
                Send OTP
              </Button>
              <Button
                variant="primary"
                typea="outlined"
                onClick={() => handleGoSignIn()}
              >
                Back
              </Button>
            </Box>
          </Box>
        </form>
      )}
      {step === ForgotPasswordSteps.OTP_VERIFY && (
        <form onSubmit={formik.handleSubmit}>
          <Box textAlign="center">
            {error && <Text color={theme.colors.redA}>{error}</Text>}
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap="30px"
            width="100%"
            padding={1}
          >
            <Box textAlign="center" gap="5px" display="grid">
              <Text size="large" weight="large">
                Enter OTP
                <br />
              </Text>
            </Box>
            <CustomInput
              id="otp"
              name="otp"
              label="OTP"
              type="number"
              error={formik.touched.otp}
              errorMessage={formik.errors.otp}
              value={formik.values.otp}
              onChange={formik.handleChange}
            />
            <Box textAlign="center">
              <Text
                style={{ textAlign: "center", cursor: "pointer" }}
                color={theme.colors.secondary}
                onClick={resendOTP}
              >
                Resend OTP?
              </Text>
            </Box>
            <Box display="grid" gap="20px" style={{ marginTop: "20px" }}>
              <Button variant="primary" type="submit">
                Verify OTP
              </Button>
              <Button
                variant="primary"
                typea="outlined"
                onClick={() => handleBack()}
              >
                Change Email
              </Button>
            </Box>
          </Box>
        </form>
      )}
      {step === ForgotPasswordSteps.UPDATE_PASSWORD && (
        <form onSubmit={formik.handleSubmit}>
          <Box textAlign="center">
            {error && <Text color={theme.colors.redA}>{error}</Text>}
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap="30px"
            width="100%"
            padding={1}
          >
            <Box textAlign="center" gap="5px" display="grid">
              <Text size="large" weight="large">
                Enter New Password
              </Text>
            </Box>
            <CustomPasswordInput
              id="password"
              name="password"
              type="password"
              label="New Password"
              error={formik.touched.password}
              errorMessage={formik.errors.password}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <CustomPasswordInput
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              error={formik.touched.confirmPassword}
              errorMessage={formik.errors.confirmPassword}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "20px" }}
            >
              Update Password
            </Button>
          </Box>
        </form>
      )}
      {step === ForgotPasswordSteps.SUCCESS_MESSAGE && (
        <Box
          display="flex"
          flexDirection="column"
          gap="30px"
          width="100%"
          padding={1}
        >
          <Box textAlign="center" gap="5px" display="grid">
            <Text size="xlarge" weight="xlarge">
              Password Reset Successful!
            </Text>
            {/* <Text size='large' weight='large'>You can sigin now with updated password</Text> */}
          </Box>
          <Button variant="primary" onClick={() => handleGoSignIn()}>
            Sign In
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ForgotPasswordForm;
