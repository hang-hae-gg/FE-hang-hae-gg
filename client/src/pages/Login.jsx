import React, { useState } from 'react'
import Cookies from 'js-cookie';
import Google from '../components/Google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`/user/login`, {
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
    <div className='flex flex-1 items-center justify-center py-16 bg-[#FFD602]/50 h-screen '>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center w-[700px] h-[600px] px-10">
        <div className='flex flex-1 flex-col  items-center'>
          <h1 className='text-[50px] font-semibold'>HH.GG</h1>
          <Google />
          <div className="flex items-center space-x-2">
            <div className="flex-1 h-[1px] w-[130px] bg-gray-300"></div>
            <span className="text-gray-500">OR</span>
            <div className="flex-1 h-[1px] w-[130px] bg-gray-300"></div>
          </div>
          <div>
            <input
              className='bg-transparent border-b py-3 mt-10 outline-none w-full focus:border-amber-400'
              placeholder="ID를 입력하세요"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            >
            </input>
            <input
              className='bg-transparent border-b py-3 mt-10 outline-none w-full focus:border-amber-400'
              placeholder="PASSWORD를 입력하세요"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            >
            </input>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className='mt-12 w-[300px] h-[50px] bg-[#FFD602]'>Login</button>
          </div>
          <div className='pt-[17px]'>
            <span>아이디가 없으신가요?</span> <button onClick={() => navigate(`/join`)} className='text-blue-600'>회원가입</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login