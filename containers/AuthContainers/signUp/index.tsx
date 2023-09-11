'use client'
import React, {useState} from 'react'
import Box from '~/components/Atoms/Box'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Text } from '~/components/Atoms/Text';
import { CustomCheckbox, CustomInput, CustomPasswordInput,UploadImage } from '~/components/molecules/inputField';
import { Button } from '~/components/Atoms/Button';
import CustomLink from '~/components/Atoms/Link/index';
import theme from '~/theme'
import { FaUser, FaUserTie } from 'react-icons/fa';
import { ReactElement } from 'react';
import { getPossibleSubRoles } from '~/utilis/roleUtils';
import { useStore } from '~/store';
import { useRouter } from 'next/navigation';


type Role = {
  role: string;
  displayName: string;
  icon: ReactElement<any, any>;
};

type FormValues = {
    name:string;
    email: string;
    password: string;
    role:string;
    subRole:string[];
    otp:string;
  }

  enum SignUpSteps {
    BASIC_DETAILS = 'basic_details',
    ENTER_OTP = 'enter_otp',
    SUCCESS_MESSAGE = 'success_message',
  }

  const roles: Role[] = [
    {
      role: 'seller',
      displayName: 'Seller',
      icon: <FaUser color="#000" fontSize="30px" />,
    },
    {
      role: 'serviceProvider',
      displayName: 'Service Provider',
      icon: <FaUserTie color="#000" fontSize="30px" />,
    },
    {
      role: 'buyer',
      displayName: 'Buyer',
      icon: <FaUser color="#000" fontSize="30px" />,
    },
  ];

const SignUpForm = () => {

    const store = useStore()
    console.log(store.user,"Userr")
    const [step, setStep] = useState<SignUpSteps>(SignUpSteps.BASIC_DETAILS);
    const [role, setRole] = useState('');

    const initialValues: FormValues = {
        role: '',
        name: '',
        email: '',
        password: '',
        subRole: [],
        otp: '',
    };

    const validationSchema = Yup.object({
        role: Yup.string().required('Please Select Role'),
        email: Yup.string().email('Invalid email address').required('Email Required'),
        password: Yup.string()
        .required('Password Required')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          'Password needs 8+ chars: upper, lower, number, special char.'
        ),
        name: Yup.string().required('Name Required'),
        subRole: Yup.array().of(Yup.string()).min(1, 'Please select at least one Type').required('Please select Type'),
        otp: step === SignUpSteps.ENTER_OTP ? Yup.string().nullable().required('OTP is required') : Yup.string(),
    });

    const onSubmit = (inputs: FormValues): void => {
        console.log(inputs);
        switch (step) {
        case SignUpSteps.BASIC_DETAILS:
            setStep(SignUpSteps.ENTER_OTP);
            break;
        case SignUpSteps.ENTER_OTP:
            store.signUp(inputs)
            setStep(SignUpSteps.SUCCESS_MESSAGE);
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
    console.log(formik)


    const handleRole = (role: string) => {
        setRole(role);
        formik.setFieldValue('role', role);
        formik.setFieldValue('subRole', []);
    };

    const handleSubRoleChange = (subRole: string) => {
        const updatedSubRoles = formik.values.subRole.includes(subRole)
        ? formik.values.subRole.filter((role) => role !== subRole)
        : [...formik.values.subRole, subRole];
        formik.setFieldValue('subRole', updatedSubRoles);
    };

    const resendOTP = () => {};

    const handleBack = () => {
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
        router.push('/signin');
    };
    

    return (
        <Box>
            {step === SignUpSteps.BASIC_DETAILS &&
                    <Box display='flex' flexDirection='column' gap='25px' width='100%' padding={1}>
                        <Box textAlign='center'>
                            {/* <Text size='large' weight='large' margin='0px 0px 10px 0px'>Select the Role</Text> */}
                            <Box display='flex' justifyContent='space-between'  alignItems= 'center' gap= '10px'>
                                {roles.map((roleItem: Role) => (
                                    <Box key={roleItem.role} display='grid' justifyContent= 'center' justifyItems= 'center' onClick={() => handleRole(role === roleItem.role ? '' : roleItem.role)} style={{cursor:'pointer'}}>
                                    <Box  display='flex' justifyContent='center' alignItems='center' width='60px' height='60px'  style={{border: role === roleItem.role ? '2px solid #1EB442' : '2px solid #000',borderRadius:'100%' }}>
                                        {React.cloneElement(roleItem.icon, { color: role === roleItem.role ? theme.colors.secondary : roleItem.icon.props.color })}
                                    </Box>
                                    <Text weight="large" style={{ color: role === roleItem.role ? '#1EB442' : '#000' }}>
                                        {roleItem.displayName}
                                    </Text>
                                    </Box>
                                ))}
                            </Box>
                            { formik.touched.name && role === '' && <Text color={theme.colors.redA}>{formik.errors.role}</Text>}
                        </Box>
                        <form onSubmit={formik.handleSubmit}>
                        {/* {role && 
                        
                        } */}
                        <Box display='flex' flexDirection='column' gap='25px' >
                            <CustomInput
                                id="name"
                                name="name"
                                label='Name'
                                error={formik.touched.name}
                                errorMessage={formik.errors.name}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                disabled={role==='' ? true : false}
                            />
                            <CustomInput
                                id="email"
                                name="email"
                                label='Email'
                                error={formik.touched.email}
                                errorMessage={formik.errors.email}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                disabled={role==='' ? true : false}
                            />
                            <CustomPasswordInput
                                id="password"
                                name="password"
                                type='password'
                                label='Password'
                                error={formik.touched.password}
                                errorMessage={formik.errors.password}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                disabled={role==='' ? true : false}
                            />
                            {role && (
                                <Box style={{ width: '250px', minHeight: '100px' }}>
                                    {role === 'seller' && <Text>Seller Types</Text>}
                                    {role === 'buyer' && <Text>Buyer Types</Text>}
                                    {role === 'serviceProvider' && <Text>Services</Text>}
                                    <Box style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', width: '260px', paddingLeft: '10px' }}>
                                    {getPossibleSubRoles(role, formik.values.subRole).map((subRoleOption) => (
                                            <CustomCheckbox 
                                            label={subRoleOption.displayName}
                                            checked={formik.values.subRole.includes(subRoleOption.subrole)}
                                            possible={subRoleOption.possible}
                                            onChange={() => handleSubRoleChange(subRoleOption.subrole)}
                                            />
                                    ))}
                                    </Box>
                                    {role && formik.touched.subRole && formik.errors.subRole && <Text size="small" style={{ color: 'red' }}>{formik.errors.subRole}</Text>}
                                </Box>
                                )}      
                            <Button variant='primary' type="submit" style={{ marginTop: '50px' }}>
                                Sign Up
                            </Button>
                            <Text style={{ textAlign: 'center' }} size="small">Do have an account? &nbsp;
                                <CustomLink url={'/signin'} text='Sign In' color={theme.colors.secondary}/>
                            </Text>
                        </Box>
                    </form>
                </Box>
            }
            {
                step === SignUpSteps.ENTER_OTP &&
                <form onSubmit={formik.handleSubmit}>
                    <Box display='flex' flexDirection='column' gap='50px' alignItems='center' width='100%' padding={1}>
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
                        <Text style={{ textAlign:'center',cursor:'pointer' }} color={theme.colors.secondary} onClick={resendOTP}>
                            Click to Resend?
                        </Text>
                    </Box>
                    </div>
                    <Box display='grid' gap='20px' style={{ marginTop: '30px' }} width='100%'>
                    <Button variant='primary' type="submit" >
                        Verify OTP
                    </Button>
                    <Button variant='primary' type="submit" typea='outlined' onClick={() => handleBack()}>
                        Back
                    </Button>
                    </Box>
                    </Box>
                </form>
            }
            {
                step === SignUpSteps.SUCCESS_MESSAGE &&
                <Box textAlign='center' display='flex' flexDirection='column' gap='50px' alignItems='center' width='100%' padding={1} >
                    <Text size='large' weight='large'>
                        Your Account successfully Created Please Signin
                    </Text>
                    <Box display='grid' gap='20px' style={{ marginTop: '30px' }} width='100%'>
                        <Button variant='primary' type="submit" onClick={handleGoSignIn}>
                            Sign In
                        </Button>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default SignUpForm