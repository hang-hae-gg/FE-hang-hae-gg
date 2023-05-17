import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Chat from "../components/Chat";
import "../App.css";
import { getAPI } from "../axios";

function Detail() {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [data, setData] = useState();
  const params = useParams();


  useEffect(() => {
    getAPI(
      `/matches/${params.id}`
    )
      .then((data) => {
        setData(data.data);
        console.log("data :: ", data.data);
      })
      .catch((e) => {
        console.log("e :: ", e);
      });
  }, [params.id]);


const handleGetRequest = () => {
const boardId = params.id
console.log("boardId", boardId)
  getAPI(
    // `/chat/${boardId}?sessionId=${data.memberId}`
    `/chat?boardId=${boardId}`
  )
    .then((data) => {
      setData(data.data);
      console.log("data :: ", data.data);
    })
    .catch((e) => {
      console.log("e :: ", e);
    });
    setIsChatOpen(true)
}

return (
  <div className="flex flex-1 items-center justify-center py-16 bg-[#F3F5F7]/50 h-screen ">
    <div className="flex gap-10 ">
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center w-[700px] h-[600px] px-10">
        <div className="flex flex-1 flex-col  items-center">
          <div>
            <div className="min-w-[270px] bg-transparent border-b  py-3 mt-10 outline-none w-full border-[#5383e8]">
              {data?.memberId}
            </div>
            <div className="min-w-[270px] bg-transparent border-b  py-3 mt-10 outline-none w-full border-[#5383e8]">
              {data?.title}
            </div>
            <div className="min-w-[270px] bg-transparent border-b py-3 mt-10 outline-none w-full border-[#5383e8]">
              {data?.content}
              <img src={data?.img} alt="post" />
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <button
              onClick={() => navigate(-1)}
              className="mt-14 w-[140px] h-[50px] bg-[#b5b5b5]/50  rounded-xl"
            >
              뒤로가기
            </button>
            <button
              onClick={handleGetRequest}
              className="mt-14 w-[140px] h-[50px] bg-[#5383e8]  rounded-xl"
            >
              채팅하기
            </button>
          </div>
        </div>
      </div>
      {isChatOpen && <Chat params={params.id} sessionId={data.memberId} />}
    </div>
  </div>
);
}
export default Detail;
