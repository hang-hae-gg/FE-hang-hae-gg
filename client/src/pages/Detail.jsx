import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Chat from '../components/Chat';
import "../App.css";

function Detail() {
    const navigate = useNavigate();
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <div className='flex flex-1 items-center justify-center py-16 bg-[#FFD602]/50 h-screen '>
            <div className='flex gap-10 '>
                <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center w-[700px] h-[600px] px-10">
                    <div className='flex flex-1 flex-col  items-center'>
                        <div>
                            <div className='min-w-[270px] bg-transparent border-b  py-3 mt-10 outline-none w-full border-amber-400'>작성자</div>
                            <div className='min-w-[270px] bg-transparent border-b  py-3 mt-10 outline-none w-full border-amber-400'>제목</div>
                            <div className='min-w-[270px] bg-transparent border-b py-3 mt-10 outline-none w-full border-amber-400'>내용</div>
                        </div>
                        <div className='flex gap-5 mt-5'>
                            <button onClick={() => navigate(-1)} className='mt-14 w-[140px] h-[50px] bg-[#b5b5b5]/50  rounded-xl'>뒤로가기</button>
                            <button 
                            onClick={() =>setIsChatOpen(true)}
                            className='mt-14 w-[140px] h-[50px] bg-[#FFD602]  rounded-xl'>채팅하기</button>
                        </div>
                    </div>
                </div>
                {isChatOpen && <Chat />}
            </div>
        </div>

    )
}

export default Detail