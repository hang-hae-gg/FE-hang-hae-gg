import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Form() {
  const [showForm, setShowForm] = useState(false);
  const [inputContent, setInputContent] = useState('');
  const [cards, setCards] = useState([]);
  const [memberName, setMemberName] = useState('');
  const [memberId, setMemberId] = useState('');

  useEffect(() => {
    fetchCards();
    fetchMemberId();
    fetchMemberName();
  }, []);

  const fetchCards = () => {
    axios
      .get('http://localhost:3000/matches') //api 연결
      .then(response => {
        setCards(response.data.matches || []);
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
      });
  };

  const fetchMemberId = () => {
    axios
      .get('http://localhost:3000/matches/memberId') //api 연결
      .then(response => {
        setMemberId(response.data.memberId);
      })
      .catch(error => {
        console.error('Error fetching member ID:', error);
      });
  };

  const fetchMemberName = () => {
    axios
      .get('http://localhost:3000/matches/memberName')//api 연결
      .then(response => {
        setMemberName(response.data.memberName);
      })
      .catch(error => {
        console.error('Error fetching member name:', error);
      });
  };

  const toggleFormHandler = () => {
    setShowForm(!showForm);
  };

  const contentHandler = event => {
    setInputContent(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const newCard = {
      memberId: memberId,
      memberName: memberName,
      content: inputContent
    };

    axios
      .post('http://localhost:3000/matches', newCard) //api 연결
      .then(response => {
        const createdCard = response.data;
        setCards([...cards, createdCard]);
        setInputContent('');
      })
      .catch(error => {
        console.error('Error creating card:', error);
      });
  };

  const deleteHandler = id => {
    axios
      .delete(`http://localhost:3000/matches/${id}`) //api 연결
      .then(() => {
        setCards(cards.filter(card => card.id !== id));
      })
      .catch(error => {
        console.error('Error deleting card:', error);
      });
  };

  const handleUpdateClick = () => {
    fetchCards();
  };
  
  return (
    <div className="space-y-4">
      <div className="flex justify-start">
        <button
          className="text-sm font-bold bg-black text-white w-20 h-10 flex justify-center items-center rounded-md border border-gray-300 font-sans"
          onClick={handleUpdateClick}
        >
          업데이트
        </button>

        <button
          className={`text-sm font-bold w-20 h-10 rounded-md border border-gray-300 font-sans ${
            showForm ? 'bg-white text-black' : 'bg-blue-500 text-white'
          }`}
          onClick={toggleFormHandler}
        >
          {showForm ? '닫기' : '글쓰기'}
        </button>
      </div>


      {showForm && (
        <div className="flex justify-start">
          <form onSubmit={handleFormSubmit}>
            <input
              className="border border-gray-300 px-4 py-2 w-80 h-20	rounded"
              type="text"
              value={inputContent}
              onChange={contentHandler}
              placeholder="내용(200자 이내)"
              maxLength={200}
            />
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" type="submit">
              등록
            </button>
          </form>
        </div>
      )}

      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          {cards.length > 0 ? (
            cards.map(card => (
              <div key={card.id} className="border border-gray-300 p-4 rounded w-80 h-56">
                <div>
                  <div>작성자: {card.nickName}</div> {/* 사용자 닉네임 표시? */}
                  <div>내용: {card.content}</div>
                  <div className="space-y-4">
                    <div className="flex justify-start">
                      <div>
                        <button className="text-sm font-bold bg-blue-500 text-white w-20 h-10 flex justify-center items-center rounded-md border border-gray-300 font-sans">
                          상세보기
                        </button>
                      </div>
                      <button
                        className="text-sm font-bold bg-red-500 text-white w-20 h-10 flex justify-center items-center rounded-md border border-gray-300 font-sans"
                        onClick={() => deleteHandler(card.id)}
                      >
                        게시글 삭제
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              게시글이 없습니다. 첫 글을 작성해주세요!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;