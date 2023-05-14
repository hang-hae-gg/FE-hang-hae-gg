import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step1 = ({ nextStep, setEmail }) => {
    // 아이디 입력
    return (
        <div>
            <div className='flex flex-1 items-center justify-center bg-[#F3F5F7] h-screen'>
                <div className="max-w-[600px] mx-auto bg-white shadow-md flex items-center w-[600px] h-screen px-10 ">
                    <div className='flex flex-1 flex-col  items-center gap-[100px]'>
                        <h1 className='text-[70px] font-bold text-[#4C8BFF]'>HH.GG</h1>
                        <div>
                            <input
                                className='bg-transparent border-b py-3 mt-10 outline-none w-[300px] focus:border-[#5383e8]'
                                placeholder="E-MAIL을 입력하세요"
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </input>
                        </div>
                        <div>
                            <button className='mt-12 w-[300px] h-[50px] text-white font-bold  bg-[#DDDFE3] '
                                onClick={nextStep}
                            >다음</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Step2 = ({ nextStep, prevStep, setPassword }) => {
    // 이메일 입력
    return (
        <div>
            <div className='flex flex-1 items-center justify-center bg-[#F3F5F7] h-screen'>
                <div className="max-w-[600px] mx-auto bg-white shadow-md flex items-center w-[600px] h-screen px-10 ">
                    <div className='flex flex-1 flex-col  items-center gap-[100px]'>
                        <h1 className='text-[70px] font-bold text-[#5383e8]'>HH.GG</h1>
                        <div>
                            <input
                                className='bg-transparent border-b py-3 mt-10 outline-none w-[300px] focus:border-[#4C8BFF]'
                                placeholder="PASSWORD를 입력하세요"
                                onChange={(e) => setPassword(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='flex flex-1 gap-x-[20px]'>
                            <button className='mt-12 w-[140px] h-[50px] text-white font-bold  bg-[#DDDFE3]'
                                onClick={prevStep}
                            >이전</button>
                            <button className='mt-12 w-[140px] h-[50px] text-white font-bold  bg-[#DDDFE3] '
                                onClick={nextStep}
                            >다음</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Step3 = ({ prevStep, handleSubmit, setNickname }) => {
    // 패스워드 입력
    return (
        <div className='flex flex-1 items-center justify-center bg-[#F3F5F7] h-screen'>
            <div className="max-w-[600px] mx-auto bg-white shadow-md flex items-center w-[600px] h-screen px-10 ">
                <div className='flex flex-1 flex-col  items-center gap-[100px]'>
                    <h1 className='text-[70px] font-bold text-[#5383e8]'>HH.GG</h1>
                    <div>
                        <input
                            className='bg-transparent border-b py-3 mt-10 outline-none w-[300px] focus:border-[#4C8BFF]'
                            placeholder="닉네임을 입력하세요"
                            onChange={(e) => setNickname(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className='flex flex-1 gap-x-[20px]'>
                        <button className='mt-12 w-[140px] h-[50px] text-white font-bold  bg-[#DDDFE3]'
                            onClick={prevStep}
                        >이전</button>
                        <button className='mt-12 w-[140px] h-[50px] text-white font-bold  bg-[#DDDFE3] '
                            onClick={handleSubmit}
                        >회원가입</button>
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
    const handleSubmit = async () => {
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
                console.error("1" ,response)
            }
        } catch (error) {
            console.error(error)
            alert("2" ,error)
        }
    }
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    switch (step) {
        case 1:
            return <Step1 nextStep={nextStep} setEmail={setEmail} />;
        case 2:
            return <Step2 nextStep={nextStep} prevStep={prevStep} setPassword={setPassword} />;
        case 3:
            return <Step3 prevStep={prevStep} handleSubmit={handleSubmit} setNickname={setNickname} />;
        default:
            return <div>Invalid step</div>;
    }
};

export default SignUp;