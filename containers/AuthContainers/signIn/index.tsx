"use client";
import React, { useContext, useEffect, useState } from "react";
import Box from "~/components/Atoms/Box";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Text } from "~/components/Atoms/Text";
import {
  CustomInput,
  CustomPasswordInput,
} from "~/components/molecules/inputField";
import { Button } from "~/components/Atoms/Button";
import CustomLink from "~/components/Atoms/Link/index";
import theme from "~/theme";
import { StoreContext } from "~/src/models";
import { useRouter } from "next/navigation";
import { LoginResponseModelType, useQuery } from "~/src/models";
import { observer } from "mobx-react-lite";
import {
  ToastDangerMessage,
  ToastErrorMessage,
  ToastSuccessMessage,
} from "~/utilis/toastMessage";
import { ApplicationConstant } from "~/constant/applicationConstant";
import { CircularProgress } from "~/components/Atoms/Loading";
import { Cookies } from "react-cookie";

interface FormValues {
  email: string;
  password: string;
  otp: string;
}

enum SignInSteps {
  SIGNIN_DETAILS = "signin_details",
  ENTER_OTP = "enter_otp",
  SUCCESS_MESSAGE = "success_message",
}

const SignInForm = () => {
  const router = useRouter();
  const store = useContext(StoreContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<SignInSteps>(SignInSteps.SIGNIN_DETAILS);
  const cookies = new Cookies();
  const initialValues: FormValues = {
    email: "",
    password: "",
    otp: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email Address")
      .required("Email Required"),
    password: Yup.string().required("Password Required"),
    otp:
      step === SignInSteps.ENTER_OTP
        ? Yup.string().nullable().required("OTP Is Required")
        : Yup.string(),
  });

  const onSubmit = async (inputs: FormValues) => {
    setError("");
    switch (step) {
      case SignInSteps.SIGNIN_DETAILS:
        try {
          setLoading(true);
          const signindata = {
            email: inputs.email,
            password: inputs.password,
          };
          const data = await store.mutateLogin(signindata);
          let expires = new Date();
          expires.setTime(expires.getTime() + 30 * 60 * 1000);
          cookies.set("user_info", data.login as LoginResponseModelType, {
            path: "/",
            expires,
          });
          cookies.set("user", data?.login?.id, { path: "/", expires });
          cookies.set("user_role", data?.login?.userRole, {
            path: "/",
            expires,
          });
          cookies.set("user_status", data?.login?.status);
          await router.push("/dashboard");
          ToastSuccessMessage("You Have Logged In Successfully");
          setLoading(false);
          store.setLoggedInUser(data.login as LoginResponseModelType);
          return;
        } catch (error) {
          const errorWithMessage = error as { message: string }[];
          const errorMessage =
            errorWithMessage[0]?.message || "An error occurred";
          setError(errorMessage);
          console.log("errror", error);
          ToastErrorMessage(errorMessage);
          setLoading(false);
          if (errorMessage === "User is not verified") {
            resendOTP();
            setError("Please Verify Your Email !!");
            setStep(SignInSteps.ENTER_OTP);
          }
          return;
        }
        break;
      case SignInSteps.ENTER_OTP:
        try {
          setLoading(true);
          const data = await store.mutateVerifyOTP({
            email: inputs.email,
            otp: Number(inputs.otp),
          });
          let OTPData = JSON.parse(JSON.stringify(data));
          console.log("data", OTPData);
          ToastSuccessMessage("OTP Success");
          setLoading(false);
          setStep(SignInSteps.SUCCESS_MESSAGE);
          setError("");
        } catch (error: any) {
          ToastDangerMessage("Invalid OTP");
          setError("Invalid OTP");
          console.log("err", error);
          setLoading(false);
          return;
        }
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

  const resendOTP = async () => {
    try {
      const data = await store.queryGenerateOTP({
        email: formik.values.email,
      });
      ToastSuccessMessage(`OTP Sent`);
    } catch (error) {
      ToastDangerMessage("Some Error Occurred. Please Try Again.");
    }
  };

  const handleBack = () => {
    setError("");
    setLoading(false);
    switch (step) {
      case SignInSteps.ENTER_OTP:
        setStep(SignInSteps.SIGNIN_DETAILS);
        break;
      default:
        break;
    }
  };

  const handleGoSignIn = () => {
    router.push(ApplicationConstant.SIGNIN_URL_PATH);
  };

  return (
    <>
      <Box>
        {step === SignInSteps.SIGNIN_DETAILS && (
          <form onSubmit={formik.handleSubmit}>
            <Box display="flex" flexDirection="column" gap="30px" width="100%">
              {error && (
                <Text textAlign="center" color={theme.colors.redA}>
                  {error}
                </Text>
              )}
              <CustomInput
                id="email"
                name="email"
                label="Email"
                error={formik.touched.email}
                errorMessage={formik.errors.email}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <Box>
                <CustomPasswordInput
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  error={formik.touched.password}
                  errorMessage={formik.errors.password}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <Box display="flex" justifyContent="end" pt="3px">
                  <CustomLink
                    url={"/forgot-password"}
                    text="Forgot Password?"
                    size="small"
                  />
                </Box>
              </Box>
              <Button
                variant="primary"
                type="submit"
                style={{
                  marginTop: "70px",
                  pointerEvents: loading ? "none" : "auto",
                  opacity: loading ? 0.8 : 1,
                }}
              >
                {loading ? (
                  <CircularProgress color={theme.colors.whiteA} />
                ) : (
                  "Sign In"
                )}
              </Button>
              <Text size="small" style={{ textAlign: "center" }}>
                Don’t Have An Account? &nbsp;
                <CustomLink
                  url={ApplicationConstant.SIGNUP_URL_PATH}
                  text="Sign up"
                  color={theme.colors.secondary}
                />
              </Text>
            </Box>
          </form>
        )}
        {step === SignInSteps.ENTER_OTP && (
          <form onSubmit={formik.handleSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              gap="50px"
              alignItems="center"
              width="100%"
              padding={1}
            >
              {error && <Text color={theme.colors.redA}>{error}</Text>}
              <Box textAlign="center" gap="5px" display="grid">
                <Text size="large" weight="large">
                  Enter OTP
                  <br />
                </Text>
                {/* <Text>We sent a code to {formik.values.email}</Text> */}
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
                  Resend OTP
                </Text>
              </Box>
              <Box
                display="grid"
                gap="20px"
                style={{
                  marginTop: "30px",
                  pointerEvents: loading ? "none" : "auto",
                  opacity: loading ? 0.8 : 1,
                }}
                width="100%"
              >
                <Button variant="primary" type="submit">
                  {loading ? (
                    <CircularProgress color={theme.colors.whiteA} />
                  ) : (
                    "Verify OTP"
                  )}
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  typea="outlined"
                  onClick={() => handleBack()}
                >
                  Back
                </Button>
              </Box>
            </Box>
          </form>
        )}
        {step === SignInSteps.SUCCESS_MESSAGE && (
          <Box
            textAlign="center"
            display="flex"
            flexDirection="column"
            gap="50px"
            alignItems="center"
            width="100%"
            padding={1}
          >
            <Text size="large" weight="large">
              Account Verification Successfull !!
            </Text>
            <Box
              display="grid"
              gap="20px"
              style={{ marginTop: "30px" }}
              width="100%"
            >
              <Button variant="primary" type="submit" onClick={handleGoSignIn}>
                Sign In
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default observer(SignInForm);
