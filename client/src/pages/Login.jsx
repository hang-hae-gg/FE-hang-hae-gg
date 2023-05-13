import React, { useState } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Image from '../assets/google.png'

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login`, {
        userName,
        password,
      })

      const responseStatus = response.status;

      if (responseStatus === 200) {
        const rowToken = response.headers['authorization'];
        // const rowToken2 = response.headers['refresh_key'];

        const token = rowToken.split(" ")[1]
        // const token2 = rowToken2.split(" ")[1]

        Cookies.set('token', token, { expires: 1 / 24 });
        // Cookies.set('token2', token2, { expires: 1 / 24 });

        alert("로그인에 성공했습니다!")
        navigate(`/`)
        window.location.reload();
      } else {
        alert(response.data.errorMessage)
        console.error(response)
      }
    } catch (error) {
      console.error(error)
      alert(error)
    }
  }

  return (
    <div>
      <div className='flex flex-1 items-center justify-center py-16 bg-[#F3F5F7] h-screen '>
        <div className="max-w-sm mx-auto bg-white shadow-md flex items-center w-[700px] h-[600px] px-10">
          <div className='flex flex-1 flex-col  items-center'>
            <h1 className='text-[50px] font-bold my-5 text-[#4C8BFF]'>HH.GG</h1>
            {/* <Google /> */}
            <img src={Image}
            className='w-[300px]  shadow-md '
            onClick={() => window.location.href = 'http://localhost:8080/oauth2/authorization/google'}
            />
            <div className="flex items-center space-x-2 my-5">
              <div className="flex-1 h-[1px] w-[130px] bg-gray-300"></div>
              <span className="text-gray-500">OR</span>
              <div className="flex-1 h-[1px] w-[130px] bg-gray-300"></div>
            </div>

            <div >
              <div >
                <span className="text-blac">이메일 로그인</span>
              </div>
              <input
                className='bg-transparent border-b py-3 outline-none w-full focus:border-[#4C8BFF]'
                placeholder="ID를 입력하세요"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              >
              </input>
              <input
                className='bg-transparent border-b py-3 mt-10 outline-none w-full focus:border-[#4C8BFF]'
                placeholder="PASSWORD를 입력하세요"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              >
              </input>
            </div>
            <div>
              <button
                onClick={handleSubmit}
                className='mt-12 w-[300px] h-[50px] text-white font-bold bg-[#DDDFE3]'>로그인</button>
            </div>
            <div className='pt-[17px]'>
              <span>아이디가 없으신가요?</span> <button onClick={() => navigate(`/signup`)} className='text-blue-600'>회원가입</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login