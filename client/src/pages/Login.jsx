import React from 'react'
import Image from '../assets/google.png'

function Login() {
  return (
    <div className='flex flex-1 items-center justify-center py-16 bg-[#F5F5F5] h-screen '>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center w-[700px] h-[600px] px-10">
        <div className='flex flex-1 flex-col  items-center'>
          <h1 className='text-[50px] font-semibold'>HH.GG</h1>
          <button className='mt-6 w-[300px] h-[50px] mb-[20px] shadow-md'>
            <img src={Image} /></button>
          <div className="flex items-center space-x-2">
            <div className="flex-1 h-[1px] w-[130px] bg-gray-300"></div>
            <span className="text-gray-500">OR</span>
            <div className="flex-1 h-[1px] w-[130px] bg-gray-300"></div>
          </div>
          <div>
            <input
              className='bg-transparent border-b py-3 mt-10 outline-none w-full focus:border-black' placeholder="ID를 입력하세요">
            </input>
            <input
              className='bg-transparent border-b py-3 mt-10 outline-none w-full focus:border-black' placeholder="PASSWORD를 입력하세요">
            </input>
          </div>
          <div>
            <button className='mt-12 w-[300px] h-[50px] bg-[#F5F5F5]'>Login</button>
          </div>
          <div className='pt-[17px]'>
          <span>아이디가 없으신가요?</span> <button className='text-blue-600'>회원가입</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login