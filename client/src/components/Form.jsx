import React, { useEffect, useState } from "react";
import { getAPI, postAPI } from "../axios";

function Form() {
  const [showForm, setShowForm] = useState(false);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [data, setData] = useState();



  useEffect(() => {
    getAPI(
      `/matches`
    )
      .then((data) => {
        setData(data.data);
        console.log("data :: ", data.data);
      })
      .catch((e) => {
        console.log("e :: ", e);
      });
  }, []);


  console.log(data);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      data: {
          title: inputValue1,
          content: inputValue2,
      },
      img: null
  };

    postAPI('/matches', newPost)
        .then(response => {
            console.log(response);  
            return getAPI('/matches');
        })
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error(error); 
        });

    setInputValue1('');
    setInputValue2('');
};

  return (
    <div className="space-y-4">
      <div className="flex justify-start">
        <button className="text-sm font-bold bg-black text-white w-20 h-10 flex justify-center items-center rounded-md border border-gray-300 font-sans">
          업데이트
        </button>
        <button
          className={`text-sm font-bold w-20 h-10 rounded-md border border-gray-300 font-sans 
          ${showForm ? 'bg-white text-black' : 'bg-blue-500 text-white'}
          `}
          onClick={handleToggleForm}
        >
          {showForm ? '닫기' : '글쓰기'}
        </button>
      </div>

      {showForm && (
        <div className="flex justify-start">
          <form onSubmit={handleFormSubmit}>
            <input
              className="border border-gray-300 px-4 py-2 rounded"
              type="text"
              value={inputValue1}
              onChange={handleInputChange1}
              placeholder="소환사명"
            />
            <input
              className="border border-gray-300 px-4 py-2 rounded"
              type="text"
              value={inputValue2}
              onChange={handleInputChange2}
              placeholder="내용(200자 이내)"
            />
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" type="submit">
              등록
            </button>
          </form>
        </div>
      )}

      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          {data?.map((post) => (
            <div key={post.id} className="border border-gray-300 p-4 rounded w-80 h-56">
              <div>
                <div>소환사명:{post.content1}</div>
                <div>내용:{post.content2}</div>
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div><button className="text-sm font-bold bg-blue-500 text-white w-20 h-10 flex justify-center items-center rounded-md border border-gray-300 font-sans">채팅하기</button></div>
                    <div><button className="text-sm font-bold bg-red-500 text-white w-20 h-10 flex justify-center items-center rounded-md border border-gray-300 font-sans">게시글 삭제</button></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Form;
