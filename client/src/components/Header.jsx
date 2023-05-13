import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center'>
            <div className='flex flex-1 max-w-[1200px] w-full bg-[#ffffff] h-[65px]  '>
                <div className='flex flex-1 justify-between mx-10 items-center'>
                    <div className='flex'>
                        <h1 className='text-[30px] text-[#FFD602] font-bold'>HH.GG</h1>
                    </div>
                    <div className='flex gap-10'>
                        <button
                            onClick={() => navigate(`/`)}
                            className='text-[#000000]'>홈</button>
                        <button
                            onClick={() => navigate(`/`)}
                            className='text-[#000000]'>커뮤니티</button>
                        <button
                            onClick={() => navigate(`/login`)}
                            className='text-[#000000]'>로그인</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header