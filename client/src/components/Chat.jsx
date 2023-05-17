import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from "react-redux";


function Chat({params, sessionId, memberName}) {

    // 본인의 메세지인지 아닌지를 구분하는 isUser
    // const messages = [
    //     { content: "Hello!", isUser: true },
    //     { content: "Hi, how can I help you?", isUser: false },
    //     { content: "I have a question about your product.", isUser: true },
    //     { content: "Sure, I'd be happy to help!", isUser: false },
    //     { content: "Hello!", isUser: true },
    //     { content: "Hi, how can I help you?", isUser: false },
    //     { content: "I have a question about your product.", isUser: true },
    //     { content: "Sure, I'd be happy to help!", isUser: false },
    //     { content: "Hello!", isUser: true },
    //     { content: "Hi, how can I help you?", isUser: false },
    //     { content: "I have a question about your product.", isUser: true },
    //     { content: "Sure, I'd be happy to help!", isUser: false },
    // ];
    // const socket = io.connect("ws://localhost:8080/ws/chat");
    
console.log(memberName)
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [boardId, SetBoardId] =useState('');
    const [boardUserId, SetBoardUserId] =useState('');
    const [guestId, setGuestId] = useState(null);
    const userId = useSelector((state) => state.auth.userId);
    const webSocket = useRef(null);
  
    console.log("gg" ,userId, boardId, memberName)
    useEffect(() => {

        webSocket.current = new WebSocket("ws://localhost:8080/ws/chat");
        console.log(webSocket.current)

        webSocket.current.onmessage = (message) => {
            const data = JSON.parse(message.data);

            if (data.newOne) {
                // Checking if 'newOne' is not equal to 'master'
                if (data.newOne !== 'master') {
                    setGuestId(data.newOne);
                    // console.log(guestId)
                }
            }
            setMessages((prevMessages) => [...prevMessages, data]);

            // Save to sessionStorage
            let container = sessionStorage.getItem(data.senderId) 
                ? JSON.parse(sessionStorage.getItem(data.senderId)) 
                : [];

            container.push(data);
            sessionStorage.setItem(data.senderId, JSON.stringify(container));
        };

        webSocket.current.onclose = () => {
            console.log("WebSocket connection closed");
        };
        
        return () => {
            if (webSocket.current) {
                webSocket.current.close();
            }
        };
    }, []);

    const handleSendMessage = () => {
        if (webSocket.current) {
            let receiverId;
            if (userId == memberName) {
                // If the current user is the author of the post, the receiver is the guest
                receiverId = guestId;
            } else {
                // If the current user is not the author, the receiver is the author
                receiverId = "master";
            }
            console.log(userId, memberName)
            console.log(receiverId)
            console.log(guestId)
            webSocket.current.send(JSON.stringify({ 
                message: input,
                receiverId: receiverId
            }));

            setInput('');
        }
    };

    console.log("message => " ,messages)

    return (
        <div className='flex flex-col w-[400px] h-[600px] bg-[#f3f3f3]  rounded-xl'>
            <div className='flex flex-col overflow-y-auto'>
            {/* isUser가 ture면 오른쪽에서, false면 왼쪽에서 나타남 */}
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.isUser ? 'user' : 'other'}`}>
                        {message.message}
                    </div>
                ))}
            </div>
            <div className='flex bg-[#fff] w-[400px] mt-auto  rounded-xl'>
                <div className='flex flex-1 justify-between mx-5 items-center gap-5'>
                    <input 
                    onChange={(e)=> setInput(e.target.value)}
                    className='bg-transparent border-b m mb-3 mt-5 outline-none w-full focus:border-[#5383e8]'></input>
                    <button 
                    onClick={handleSendMessage}
                    className='bg-[#5383e8] w-[100px] h-[40px] rounded-xl'>보내기</button>
                </div>
            </div>
        </div>
    )
}

export default Chat