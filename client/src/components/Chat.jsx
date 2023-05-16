import React from 'react'

function Chat() {

    // 본인의 메세지인지 아닌지를 구분하는 isUser
    const messages = [
        { content: "Hello!", isUser: true },
        { content: "Hi, how can I help you?", isUser: false },
        { content: "I have a question about your product.", isUser: true },
        { content: "Sure, I'd be happy to help!", isUser: false },
        { content: "Hello!", isUser: true },
        { content: "Hi, how can I help you?", isUser: false },
        { content: "I have a question about your product.", isUser: true },
        { content: "Sure, I'd be happy to help!", isUser: false },
        { content: "Hello!", isUser: true },
        { content: "Hi, how can I help you?", isUser: false },
        { content: "I have a question about your product.", isUser: true },
        { content: "Sure, I'd be happy to help!", isUser: false },
    ];

    return (
        <div className='flex flex-col w-[400px] h-[600px] bg-[#f3f3f3]  rounded-xl'>
            <div className='flex flex-col overflow-y-auto'>
            {/* isUser가 ture면 오른쪽에서, false면 왼쪽에서 나타남 */}
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.isUser ? 'user' : 'other'}`}>
                        {message.content}
                    </div>
                ))}
            </div>
            <div className='flex bg-[#fff] w-[400px] mt-auto  rounded-xl'>
                <div className='flex flex-1 justify-between mx-5 items-center gap-5'>
                    <input className='bg-transparent border-b m mb-3 mt-5 outline-none w-full focus:border-[#5383e8]'></input>
                    <button className='bg-[#5383e8] w-[100px] h-[40px] rounded-xl'>보내기</button>
                </div>
            </div>
        </div>
    )
}

export default Chat