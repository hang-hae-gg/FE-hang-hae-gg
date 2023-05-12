import React from 'react'
import '../index.css';

function Join() {
  return (

    <div className='flex flex-1 items-center justify-center py-16 bg-[#F5F5F5] h-screen '>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center w-[700px] h-[600px] px-10">
        <div className='flex flex-1 flex-col  items-center'>
          <h1 className='text-[50px] font-semibold'>HH.GG</h1>
          <div>
            <input
              className='bg-transparent border-b py-3 mt-10 outline-none w-full focus:border-black' placeholder="ID를 입력하세요">
            </input>
            <input
              className='bg-transparent border-b py-3 mt-10 outline-none w-full focus:border-black' placeholder="PASSWORD를 입력하세요">
            </input>
          </div>
          <div>
            <button className='mt-12 w-[100px] h-[50px]'>회원가입</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join