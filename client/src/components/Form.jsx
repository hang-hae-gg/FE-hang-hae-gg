import React, { useState } from 'react';

function Form() {
  const [showForm, setShowForm] = useState(false);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [cards, setCards] = useState([]);

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
    const newCard = {
      id: Math.random().toString(),
      content1: inputValue1,
      content2: inputValue2,
    };
    setCards([...cards, newCard]);
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
          {cards.map((card) => (
            <div key={card.id} className="border border-gray-300 p-4 rounded w-80 h-56">
              <div>
                <div>닉네임:{card.content1}</div>
                <div>내용:{card.content2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Form;
