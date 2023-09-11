'use client'
import React, { useState } from 'react';
import Box from '~/components/Atoms/Box';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Text } from '~/components/Atoms/Text';
import { CustomInput, CustomPasswordInput } from '~/components/molecules/inputField';
import { Button } from '~/components/Atoms/Button';
import theme from '~/theme';
import CustomLink from '~/components/Atoms/Link/index';
import { useStore } from '~/store';
import { useRouter } from 'next/navigation';

interface FormValues {
    email: string;
    otp: string;
    password: string;
    confirmPassword: string;
    isotpverified: boolean;
}

enum ForgotPasswordSteps {
    GET_OTP = 'GET_OTP',
    OTP_VERIFY = 'OTP_VERIFY',
    UPDATE_PASSWORD = 'UPDATE_PASSWORD',
    SUCCESS_MESSAGE = 'SUCCESS_MESSAGE',
}

const ForgotPasswordForm = () => {
    const router = useRouter();
    const store = useStore();
    const [step, setStep] = useState<ForgotPasswordSteps>(ForgotPasswordSteps.GET_OTP);

    const initialValues: FormValues = {
        email: '',
        otp: '',
        isotpverified: false,
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        otp: step === ForgotPasswordSteps.OTP_VERIFY ? Yup.string().required('OTP is required') : Yup.string(),
        password: step === ForgotPasswordSteps.UPDATE_PASSWORD ?
         Yup.string()
        .required('Password Required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password needs 8+ chars: upper, lower, number, special char.'
        ) : Yup.string(),
        confirmPassword:
            step === ForgotPasswordSteps.UPDATE_PASSWORD
                ? Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm Password is required')
                : Yup.string(),
        isotpverified: Yup.boolean(),
    });

    const onSubmit = async (inputs: FormValues) => {
        switch (step) {
            case ForgotPasswordSteps.GET_OTP:
                // Logic to request OTP and move to the next step
                setStep(ForgotPasswordSteps.OTP_VERIFY);
                break;
            case ForgotPasswordSteps.OTP_VERIFY:
                // Logic to verify OTP and move to the next step
                setStep(ForgotPasswordSteps.UPDATE_PASSWORD);
                break;
            case ForgotPasswordSteps.UPDATE_PASSWORD:
                // Logic to update password and move to the success step
                setStep(ForgotPasswordSteps.SUCCESS_MESSAGE);
                break;
            case ForgotPasswordSteps.SUCCESS_MESSAGE:
                // Logic to navigate or perform other actions after successful password reset
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
        router.push('/signin');
    };

    const handleBack = () => {
        if (step === ForgotPasswordSteps.OTP_VERIFY) {
          setStep(ForgotPasswordSteps.GET_OTP);
        } 
    };
    

    return (
        <Box>
            {step === ForgotPasswordSteps.GET_OTP && (
                <form onSubmit={formik.handleSubmit}>
                    <Box display='flex' flexDirection='column' gap='30px' width='100%' padding={1}>
                        <Box textAlign='center' display='grid'>
                            <Text size='large' weight='large'>Enter your email to get OTP</Text>
                        </Box>
                        <CustomInput
                            id="email"
                            name="email"
                            label='Email'
                            error={formik.touched.email}
                            errorMessage={formik.errors.email}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <Box display='grid' gap='20px' style={{ marginTop: '20px' }}>
                        <Button variant='primary' type="submit" >
                            Get OTP
                        </Button>
                        <Button variant='primary' typea='outlined' onClick={() => handleGoSignIn()}>
                            Back
                        </Button>
                        </Box>
                    </Box>
                </form>
            )}
            {step === ForgotPasswordSteps.OTP_VERIFY && (
                <form onSubmit={formik.handleSubmit}>
                    <Box display='flex' flexDirection='column' gap='30px' width='100%' padding={1}>
                    <Box textAlign='center' gap='5px' display='grid'>
                        <Text size='large' weight='large'>
                            Enter Verification code <br/>
                        </Text>
                        <Text>
                            We sent a code to {formik.values.email}
                        </Text>
                    </Box>
                    <div>
                    <CustomInput
                        id="otp"
                        name="otp"
                        label='OTP'
                        error={formik.touched.otp}
                        errorMessage={formik.errors.otp}
                        value={formik.values.otp}
                        onChange={formik.handleChange}
                    />
                    <Box textAlign='center'>
                        <Text style={{ textAlign:'center',cursor:'pointer' }} color={theme.colors.secondary}>
                            Click to Resend?
                        </Text>
                    </Box>
                    </div>
                         <Box display='grid' gap='20px' style={{ marginTop: '20px' }}>
                            <Button variant='primary' type="submit">
                                Verify OTP
                            </Button>
                            <Button variant='primary'  typea='outlined' onClick={()=> handleBack()}>
                                Change Email
                            </Button>
                        </Box>
                    </Box>
                </form>
            )}
            {step === ForgotPasswordSteps.UPDATE_PASSWORD && (
                <form onSubmit={formik.handleSubmit}>
                    <Box display='flex' flexDirection='column' gap='30px' width='100%' padding={1}>
                        <Box textAlign='center' gap='5px' display='grid'>
                            <Text size='large' weight='large'>
                                Enter new password
                            </Text>
                        </Box>
                        <CustomPasswordInput
                            id="password"
                            name="password"
                            type='password'
                            label='New Password'
                            error={formik.touched.password}
                            errorMessage={formik.errors.password}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <CustomPasswordInput
                            id="confirmPassword"
                            name="confirmPassword"
                            type='password'
                            label='Confirm Password'
                            error={formik.touched.confirmPassword}
                            errorMessage={formik.errors.confirmPassword}
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                        />
                        <Button variant='primary' type="submit" style={{ marginTop: '20px' }}>
                            Update Password
                        </Button>
                    </Box>
                </form>
            )}
            {step === ForgotPasswordSteps.SUCCESS_MESSAGE && (
                <Box  display='flex' flexDirection='column' gap='30px' width='100%' padding={1}>
                     <Box textAlign='center' gap='5px' display='grid'>
                        <Text size='xlarge' weight='xlarge'>Password reset successful!</Text>
                        <Text size='large' weight='large'>You can sigin now with updated password</Text>
                    </Box>
                    <Button variant='primary' onClick={() => handleGoSignIn()}>
                        Sign In
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default ForgotPasswordForm;
