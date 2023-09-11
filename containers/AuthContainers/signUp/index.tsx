"use client";
import React, { useContext, useState } from "react";
import Box from "~/components/Atoms/Box";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Text } from "~/components/Atoms/Text";
import {
  CustomCheckbox,
  CustomInput,
  CustomPasswordInput,
  UploadImage,
} from "~/components/molecules/inputField";
import { Button } from "~/components/Atoms/Button";
import CustomLink from "~/components/Atoms/Link/index";
import theme from "~/theme";
import { FaUser, FaUserTie } from "react-icons/fa";
import { ReactElement } from "react";
import { getPossibleSubRoles } from "~/utilis/roleUtils";
import { useRouter } from "next/navigation";
import { StoreContext } from "~/src/models";
import { toast } from "react-toastify";
import { ToastDangerMessage, ToastSuccessMessage } from "~/utilis/toastMessage";
import { CircularProgress } from "~/components/Atoms/Loading";

type Role = {
  role: string;
  displayName: string;
  icon: ReactElement<any, any>;
};

type FormValues = {
  name: string;
  email: string;
  password: string;
  role: string;
  profile: string[];
  otp: string;
};

enum SignUpSteps {
  BASIC_DETAILS = "basic_details",
  ENTER_OTP = "enter_otp",
  SUCCESS_MESSAGE = "success_message",
}

const roles: Role[] = [
  {
    role: "SELLER",
    displayName: "Seller",
    icon: <FaUser color="#000" fontSize="30px" />,
  },
  {
    role: "SERVICE_PROVIDER",
    displayName: "Service Provider",
    icon: <FaUserTie color="#000" fontSize="30px" />,
  },
  {
    role: "BUYER",
    displayName: "Buyer",
    icon: <FaUser color="#000" fontSize="30px" />,
  },
];

const SignUpForm = () => {
  const store = useContext(StoreContext);
  const [step, setStep] = useState<SignUpSteps>(SignUpSteps.BASIC_DETAILS);
  const [role, setRole] = useState("");
  const [selectSubRole, setSelectSubRole] = useState<string[]>([]);
  const [error, setError] = useState<any>("");
  const [loading, setLoading] = useState(false);

  const initialValues: FormValues = {
    role: "",
    name: "",
    email: "",
    password: "",
    profile: [],
    otp: "",
  };

  const validationSchema = Yup.object({
    role: Yup.string().required("Please Select Role"),
    email: Yup.string()
      .email("Invalid Email Address")
      .matches(
        /^[a-z0-9@.]+$/,
        'Text must contain only lowercase letters, numbers, and "@"'
      )
      .required("Email Required"),
    password: Yup.string()
      .required("Password Required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password needs 8+ chars: upper, lower, number, special char."
      ),
    name: Yup.string()
      .matches(/^[A-Za-z, ]+$/, "Please Enter Alphabetic Characters")
      .required("Name Required"),
    profile: Yup.array()
      .min(1, "Please Select Type")
      .required("Please Select Type"),
    otp:
      step === SignUpSteps.ENTER_OTP
        ? Yup.string().nullable().required("OTP Is Required")
        : Yup.string(),
  });

  const onSubmit = async (inputs: FormValues) => {
    setError("");
    switch (step) {
      case SignUpSteps.BASIC_DETAILS:
        try {
          setLoading(true);
          const signUpData = await store.mutateSignUp({
            signUpData: {
              name: inputs.name,
              email: inputs.email,
              mobile: "9999999999",
              password: inputs.password,
              requestedProfile: inputs.profile,
              role: role,
            },
          });
          console.log(signUpData, "signUpData");
          setStep(SignUpSteps.ENTER_OTP);
          setError("");
          setLoading(false);
          break;
        } catch (error) {
          console.log(error, "errorkshfwlkfbwhcbc");
          const errorWithMessage = error as { message: string }[];
          const errorMessage =
            errorWithMessage[0]?.message || "An error occurred";
          setError(errorMessage);
          setLoading(false);
          return;
        }
      case SignUpSteps.ENTER_OTP:
        try {
          setLoading(true);
          const data = await store.mutateVerifyOTP({
            email: inputs.email,
            otp: Number(inputs.otp),
          });
          let OTPData = JSON.parse(JSON.stringify(data));
          console.log("data", OTPData);
          ToastSuccessMessage("OTP success");
          setLoading(false);
          // toast.success("otp success", {
          //     position: "top-right",
          //     autoClose: 2000,
          //     hideProgressBar: false,
          //     closeOnClick: true,
          //     pauseOnHover: true,
          //     draggable: true,
          //     progress: undefined,
          //     theme: "light",
          // });
          setStep(SignUpSteps.SUCCESS_MESSAGE);
          setError("");
        } catch (error: any) {
          ToastDangerMessage("Invalid OTP");
          // toast.error("invalid otp", {
          //     position: "top-right",
          //     autoClose: 2000,
          //     hideProgressBar: false,
          //     closeOnClick: true,
          //     pauseOnHover: true,
          //     draggable: true,
          //     progress: undefined,
          //     theme: "light",
          // });
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
  console.log(formik);

  const handleRole = (role: string) => {
    setRole(role);
    formik.setFieldValue("role", role);
    formik.setFieldValue("profile", []);
    setSelectSubRole([]);
  };

  const handleSubRoleChange = (subRole: string) => {
    const updatedSubRoles = selectSubRole.includes(subRole)
      ? selectSubRole.filter((role) => role !== subRole)
      : [...selectSubRole, subRole];

    setSelectSubRole(updatedSubRoles);
    // const profileValue = updatedSubRoles.join('_').toUpperCase();
    formik.setFieldValue("profile", updatedSubRoles);
  };

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
      case SignUpSteps.ENTER_OTP:
        setStep(SignUpSteps.BASIC_DETAILS);
        break;
      default:
        break;
    }
  };

  const router = useRouter();
  const handleGoSignIn = () => {
    router.push("/signin");
  };

  return (
    <Box>
      {step === SignUpSteps.BASIC_DETAILS && (
        <Box
          display="flex"
          flexDirection="column"
          gap="25px"
          width="100%"
          padding={1}
        >
          <Box display="flex" justifyContent="center" textAlign="center">
            {!role && <Text weight="large">Please Select Role</Text>}
            {error && <Text color={theme.colors.redA}>{error}</Text>}
          </Box>
          <Box textAlign="center">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="start"
              gap="10px"
            >
              {roles.map((roleItem: Role) => (
                <Box
                  key={roleItem.role}
                  display="grid"
                  justifyContent="center"
                  justifyItems="center"
                  onClick={() =>
                    handleRole(role === roleItem.role ? "" : roleItem.role)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="60px"
                    height="60px"
                    style={{
                      border:
                        role === roleItem.role
                          ? "2px solid #1EB442"
                          : "2px solid #000",
                      borderRadius: "100%",
                    }}
                  >
                    {React.cloneElement(roleItem.icon, {
                      color:
                        role === roleItem.role
                          ? theme.colors.secondary
                          : roleItem.icon.props.color,
                    })}
                  </Box>
                  <Text
                    weight="large"
                    width="auto"
                    style={{
                      color: role === roleItem.role ? "#1EB442" : "#000",
                    }}
                  >
                    {roleItem.displayName}
                  </Text>
                </Box>
              ))}
            </Box>
            {formik.touched.name && role === "" && (
              <Text color={theme.colors.redA}>{formik.errors.role}</Text>
            )}
          </Box>

          <form onSubmit={formik.handleSubmit}>
            <Box display="flex" flexDirection="column" gap="28px">
              {role && (
                <Box display="flex" flexDirection="column" gap="28px">
                  <CustomInput
                    id="name"
                    name="name"
                    label="Name"
                    error={formik.touched.name}
                    errorMessage={formik.errors.name}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    disabled={role === "" ? true : false}
                  />
                  <CustomInput
                    id="email"
                    name="email"
                    label="Email"
                    error={formik.touched.email}
                    errorMessage={formik.errors.email}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    disabled={role === "" ? true : false}
                  />
                  <CustomPasswordInput
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    error={formik.touched.password}
                    errorMessage={formik.errors.password}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    disabled={role === "" ? true : false}
                  />
                  <Box width="250px">
                    {role === "SELLER" && <Text>Seller Types</Text>}
                    {role === "BUYER" && <Text>Buyer Types</Text>}
                    {role === "SERVICE_PROVIDER" && <Text>Services</Text>}
                    <Box
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        width: "260px",
                        paddingLeft: "10px",
                      }}
                    >
                      {getPossibleSubRoles(role, selectSubRole).map(
                        (subRoleOption) => (
                          <CustomCheckbox
                            label={subRoleOption.displayName}
                            checked={selectSubRole.includes(
                              subRoleOption.subrole
                            )}
                            possible={subRoleOption.possible}
                            onChange={() =>
                              handleSubRoleChange(subRoleOption.subrole)
                            }
                          />
                        )
                      )}
                    </Box>
                    {role &&
                      formik.touched.profile &&
                      formik.errors.profile && (
                        <Text size="small" style={{ color: "red" }}>
                          {formik.errors.profile}
                        </Text>
                      )}
                  </Box>
                </Box>
              )}
              <Button
                variant="primary"
                type="submit"
                style={{
                  pointerEvents: loading ? "none" : "auto",
                  opacity: loading ? 0.8 : 1,
                }}
              >
                {loading ? (
                  <CircularProgress color={theme.colors.whiteA} />
                ) : (
                  "Sign Up"
                )}
              </Button>
              <Text style={{ textAlign: "center" }} size="small">
                Do Have An Account? &nbsp;
                <CustomLink
                  url={"/signin"}
                  text="Sign In"
                  color={theme.colors.secondary}
                />
              </Text>
            </Box>
          </form>
        </Box>
      )}
      {step === SignUpSteps.ENTER_OTP && (
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
                Enter OTP <br />
              </Text>
              {/* <Text>OTP Sent</Text> */}
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
                Resend OTP ?
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
      {step === SignUpSteps.SUCCESS_MESSAGE && (
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
            Account Successfully Created
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
  );
};

export default SignUpForm;
