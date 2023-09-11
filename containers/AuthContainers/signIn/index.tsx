'use client'
import React,{useState} from 'react'
import Box from '~/components/Atoms/Box'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Text } from '~/components/Atoms/Text';
import { CustomInput, CustomPasswordInput } from '~/components/molecules/inputField';
import { ApplicationConstant } from '~/constant/applicationConstant';
import { Button } from '~/components/Atoms/Button';
import CustomLink from '~/components/Atoms/Link/index';
import theme from '~/theme'
import { useStore } from '~/store';
import { useRouter } from 'next/navigation';

interface FormValues {
    email: string;
    password: string;
}  

const SignInForm = () => {
    
    const router = useRouter();
    const store = useStore()
    
    const initialValues: FormValues = {
        email: '',
        password: '',
    };
    
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email Required'),
        password: Yup.string().required('Password Required'),
    });
    
    const onSubmit = async (inputs: FormValues) => {
        await store.signIn(inputs)
        router.push(ApplicationConstant.DASHBOARD_URL_PATH);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Box display='flex' flexDirection='column' gap='30px' width='100%'>
                    <CustomInput
                        id="email"
                        name="email"
                        label='Email'
                        error={formik.touched.email}
                        errorMessage={formik.errors.email}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <Box>
                        <CustomPasswordInput
                            id="password"
                            name="password"
                            type='password'
                            label='Password'
                            error={formik.touched.password}
                            errorMessage={formik.errors.password}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <Box style={{position: 'absolute', margin: '-10px 0px 0px 140px'}}>
                            <CustomLink url={'/forgot-password'} text='Forgot Password?'/>
                        </Box>
                    </Box>
                    <Button variant='primary' type="submit" style={{ marginTop: '70px' }}>
                        Sign In
                    </Button>
                    <Text size="small" style={{ textAlign: 'center' }}>Don’t have an account? &nbsp;
                        <CustomLink url={'/signup'} text='Sign up' color={theme.colors.secondary}/>
                    </Text>
                </Box>
            </form>
        </Box>
    )
}

export default SignInForm