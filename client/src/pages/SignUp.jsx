import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';


const EmailSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('입력'),
});

const PasswordSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
});

const NicknameSchema = Yup.object().shape({
    nickname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});


const Step1 = ({ nextStep, setEmailHandler }) => {
    // 이메일 입력
    return (
        <>

            <div>
                <div className='flex flex-1 items-center justify-center bg-[#F3F5F7] h-screen'>
                    <div className="max-w-[600px] mx-auto bg-white shadow-md flex items-center w-[600px] h-screen px-10 ">
                        <div className='flex flex-1 flex-col  items-center gap-[100px]'>
                            <h1 className='text-[70px] font-bold text-[#4C8BFF]'>HH.GG</h1>
                            <div className='flex items-center  justify-center'>
                                <Formik
                                    initialValues={{
                                        email: '',
                                    }}
                                    validationSchema={EmailSchema}
                                    onSubmit={(values) => {
                                        setEmailHandler(values.email);
                                        nextStep();
                                    }}
                                >
                                    {({ errors, touched }) => (
                                        <Form>
                                            <Field
                                                name="email"
                                                className='bg-transparent border-b py-3 mt-10 outline-none w-[300px] focus:border-[#5383e8]'
                                                placeholder="E-MAIL을 입력하세요"
                                            />
                                            {errors.email && touched.email ?
                                                <div style={{ color: 'red' }}>{errors.email}</div>
                                                : <div></div>}
                                            <button className='mt-12 w-[300px] h-[50px] text-white font-bold  bg-[#DDDFE3]' type="submit">다음</button>
                                        </Form>
                                    )}
                                </Formik>
                                {/* <input
                                    className='bg-transparent border-b py-3 mt-10 outline-none w-[300px] focus:border-[#5383e8]'
                                    placeholder="E-MAIL을 입력하세요"
                                    onChange={(e) => setEmailHandler(e.target.value)}
                                >
                                </input>
                            </div>
                            <div>
                                <button className='mt-12 w-[300px] h-[50px] text-white font-bold  bg-[#DDDFE3] '
                                    onClick={nextStep}
                                >다음</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const Step2 = ({ nextStep, prevStep, setPasswordHandler }) => {
    // 패스워드 입력
    return (
        <div>
            <div className='flex flex-1 items-center justify-center bg-[#F3F5F7] h-screen'>
                <div className="max-w-[600px] mx-auto bg-white shadow-md flex items-center w-[600px] h-screen px-10 ">
                    <div className='flex flex-1 flex-col  items-center gap-[100px]'>
                        <h1 className='text-[70px] font-bold text-[#5383e8]'>HH.GG</h1>
                        <div>
                            <Formik
                                initialValues={{
                                    password: '',
                                }}
                                validationSchema={PasswordSchema}
                                onSubmit={(values) => {
                                    setPasswordHandler(values.password);
                                    nextStep();
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <Field
                                            name="password"
                                            className='bg-transparent border-b py-3 mt-10 outline-none w-[300px] focus:border-[#5383e8]'
                                            placeholder="PASSWORD을 입력하세요"
                                            type="password"
                                        />
                                        {errors.password && touched.password ?
                                            <div style={{ color: 'red' }}>{errors.password}</div>
                                            : <div></div>}
                                        <button className='mt-12 w-[300px] h-[50px] text-white font-bold  bg-[#DDDFE3]' type="submit">다음</button>
                                    </Form>
                                )}
                            </Formik>
                            {/* <input
                                className='bg-transparent border-b py-3 mt-10 outline-none w-[300px] focus:border-[#4C8BFF]'
                                placeholder="PASSWORD를 입력하세요"
                                onChange={(e) => setPasswordHandler(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='flex flex-1 gap-x-[20px]'>
                            <button className='mt-12 w-[140px] h-[50px] text-white font-bold  bg-[#DDDFE3]'
                                onClick={prevStep}
                            >이전</button>
                            <button className='mt-12 w-[140px] h-[50px] text-white font-bold  bg-[#DDDFE3] '
                                onClick={nextStep}
                            >다음</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Step3 = ({ prevStep, handleSubmit, setNicknameHandler }) => {
    // 닉네임 입력
    return (
        <div className='flex flex-1 items-center justify-center bg-[#F3F5F7] h-screen'>
            <div className="max-w-[600px] mx-auto bg-white shadow-md flex items-center w-[600px] h-screen px-10 ">
                <div className='flex flex-1 flex-col  items-center gap-[100px]'>
                    <h1 className='text-[70px] font-bold text-[#5383e8]'>HH.GG</h1>
                    <div>
                        <Formik
                            initialValues={{
                                nickname: '1',
                            }}
                            validationSchema={NicknameSchema}
                            onSubmit={(values) => {
                                setNicknameHandler(values.nickname);
                                handleSubmit(values.nickname);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <Field
                                        name="nickname"
                                        className='bg-transparent border-b py-3 mt-10 outline-none w-[300px] focus:border-[#5383e8]'
                                        placeholder="닉네임을 입력하세요"
                                    />
                                    {errors.nickname && touched.nickname ?
                                        <div style={{ color: 'red' }}>{errors.nickname}</div>
                                        : <div></div>}
                                    <button className='mt-12 w-[300px] h-[50px] text-white font-bold  bg-[#DDDFE3]' type="submit">회원가입</button>
                                </Form>
                            )}
                        </Formik>
                        {/* <input
                            className='bg-transparent border-b py-3 mt-10 outline-none w-[300px] focus:border-[#4C8BFF]'
                            placeholder="닉네임을 입력하세요"
                            onChange={(e) => setNicknameHandler(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className='flex flex-1 gap-x-[20px]'>
                        <button className='mt-12 w-[140px] h-[50px] text-white font-bold  bg-[#DDDFE3]'
                            onClick={prevStep}
                        >이전</button>
                        <button className='mt-12 w-[140px] h-[50px] text-white font-bold  bg-[#DDDFE3] '
                            onClick={handleSubmit}
                        >회원가입</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

const SignUp = () => {
    const [step, setStep] = useState(1);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const navigate = useNavigate();
    console.log(email, password, nickname)
    const handleSubmit = async (nickname) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/signup`, {
                email,
                password,
                nickname,
            }, {})
    
            const responseStatus = response.status;
    
            if (responseStatus === 200) {
                alert("회원가입에 성공했습니다!")
                navigate(`/`)
            } else {
                alert(response)
                console.error("1", response)
            }
        } catch (error) {
            console.error(error)
            alert("2", error)
        }
    }
    
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const setEmailHandler = (value) => {
        setEmail(value)
    }
    const setPasswordHandler = (value) => {
        setPassword(value)
    }
    const setNicknameHandler = (value) => {
        setNickname(value)
        console.log(value);
    }
    switch (step) {
        case 1:
            return <Step1 nextStep={nextStep} setEmail={setEmail} setEmailHandler={setEmailHandler} />;
        case 2:
            return <Step2 nextStep={nextStep} prevStep={prevStep} setPassword={setPassword} setPasswordHandler={setPasswordHandler} />;
        case 3:
            return <Step3 prevStep={prevStep} handleSubmit={handleSubmit} setNicknameHandler={setNicknameHandler} />;
        default:
            return <div>Invalid step</div>;
    }
};

export default SignUp;