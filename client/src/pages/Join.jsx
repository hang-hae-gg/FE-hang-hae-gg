import axios from 'axios';
import React, { useState } from 'react'

function Join() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`/signup` , {
        userName,
        password,
      }, {})

      const responseStatus = response.status;

      if (responseStatus === 200) {
        alert("회원가입에 성공했습니다!")
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
    <div className='flex flex-1 items-center justify-center py-16 bg-[#F5F5F5] h-screen '>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center w-[700px] h-[600px] px-10">
        <div className='flex flex-1 flex-col  items-center'>
          <h1 className='text-[50px] font-semibold'>HH.GG</h1>
          <div>
            <input
              className='bg-transparent border-b py-3 mt-10 outline-none w-full focus:border-black'
              placeholder="ID를 입력하세요"
              onChange={(e) => setUserName(e.target.value)}
            >
            </input>
            <input
              className='bg-transparent border-b py-3 mt-10 outline-none w-full focus:border-black'
              placeholder="PASSWORD를 입력하세요"
              onChange={(e) => setPassword(e.target.value)}
            >
            </input>
          </div>
          <div>
            <button className='mt-12 w-[300px] h-[50px] bg-[#F5F5F5]'
            onClick={handleSubmit}
            >SignUp</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join