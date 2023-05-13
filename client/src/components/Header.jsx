import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import logout from '../api/logout';


function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const userId = useSelector((state) => state.auth.userId)
    console.log(isAuthenticated)
    return (
        <div className='flex justify-center'>
            <div className='flex flex-1 max-w-[1200px] w-full bg-[#5383e8] h-[65px]  '>
                <div className='flex flex-1 justify-between mx-10 items-center'>
                    <div className='flex'>
                        <button
                            onClick={() => navigate(`/`)}
                            className='text-[30px] text-[#ffffff] font-bold'>HH.GG</button>
                    </div>
                    <div className='flex gap-10'>
                        {
                            isAuthenticated && <span>{userId}님 환영합니다!</span>
                        }
                        <button
                            onClick={() => navigate(`/`)}
                            className='text-[#ffffff]'>커뮤니티</button>

                        {
                            isAuthenticated ?
                                <button
                                    onClick={() => logout(dispatch)}
                                    className='text-[#ffffff]'>로그아웃</button>
                                :
                                <button
                                    onClick={() => navigate(`/login`)}
                                    className='text-[#ffffff]'>로그인</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header