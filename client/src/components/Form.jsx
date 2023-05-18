import React, { useEffect, useState } from "react";
import { getAPI, boardPostAPI, deleteAPI } from "../axios";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Form() {
  const [showForm, setShowForm] = useState(false);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [data, setData] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAPI(`/matches`)
      .then((data) => {
        setData(data.data);
        // console.log("data :: ", data.data);
      })
      .catch((e) => {
        console.log("e :: ", e);
      });
  }, []);

  // console.log(data);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    if (selectedFile) {
      formData.append("img", selectedFile);
    }

    const data = {
      title: inputValue1,
      content: inputValue2,
    };

    const blob = new Blob([JSON.stringify(data)], {
      // type에 JSON 타입 지정
      type: "application/json",
    });

    formData.append("data", blob);

    boardPostAPI("/matches", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      transformRequest: [
        function () {
          return formData;
        },
      ],
    }).then((response) => {
      console.log("response :: ", response);
      if (response.status === 200) {
        console.log("200");
        // navigate("../Community");
        // 글 등록 시 새로고침
        window.location.reload();
      }
    });

    setInputValue1("");
    setInputValue2("");
    setSelectedFile(null);
  };

  const handleDeletePost = (postId) => {
    deleteAPI(`/matches/${postId}`)
      .then((response) => {
        console.log("Deleted successfully");
        window.location.reload();
      })
      .catch((error) => {
        alert(error.response.data.message);
        console.error("error", error.response.data.message);
      });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFileName(file.name);
    setSelectedFile(event.target.files[0]);
  };

  const handleDetailPage = (postId) => {
    navigate(`/community/${postId}`);
  };

  return (
    <Container>
      <div className="space-y-2" />
      <BtnHeader>
        <div
          style={{
            width: "1080px",
            margin: "0px auto",
          }}
        >
          <WriteBtn onClick={handleToggleForm}>
            {showForm ? "닫기" : "글쓰기"}
          </WriteBtn>
        </div>
      </BtnHeader>

      {showForm && (
        <div
          style={{
            width: "1080px",
            margin: "0px auto",
            marginBottom: "5px",
          }}
        >
          <form onSubmit={handleFormSubmit} encType="multipart/form-data">
            <div
              style={{
                display: "flex",
                gap: "5px",
              }}
            >
              <input
                className="border border-gray-300 px-4 py-2 rounded"
                type="text"
                value={inputValue1}
                onChange={handleInputChange1}
                placeholder="소환사명"
                style={{
                  height: "40px",
                  width: "150px",
                  outline: "none",
                }}
              />
              <input
                className="border border-gray-300 px-4 py-2 rounded"
                type="text"
                value={inputValue2}
                onChange={handleInputChange2}
                placeholder="내용"
                style={{
                  height: "40px",
                  width: "250px",
                  outline: "none",
                }}
              />
              <div
                style={{
                  display: "flex",
                }}
              >
                <FileLabel htmlFor="fileInput">
                  프로필 이미지 선택
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    style={{
                      display: "none",
                    }}
                  />
                </FileLabel>
                {selectedFileName && (
                  <FileNameDiv>
                    <div
                      style={{
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    >
                      파일명 : {selectedFileName}
                    </div>
                  </FileNameDiv>
                )}
                <RegistrationBtn type="submit">등록</RegistrationBtn>
              </div>
            </div>
          </form>
        </div>
      )}

      <CardContents>
        <Cards>
          {data?.map((post, index) => (
            <Card key={index}>
              <div
                style={{
                  paddingTop: "12px",
                }}
              >
                <img
                  src={post.img}
                  alt="post"
                  style={{
                    width: "96px",
                    height: " 96px",
                    borderRadius: "8px",
                    margin: "0 auto",
                  }}
                />
                <CardName>{post.title}</CardName>
                <CardText>{post.content}</CardText>
              </div>

              <CommunityBtn>
                <DetailsBtn onClick={() => handleDetailPage(post.boardId)}>
                  상세보기
                </DetailsBtn>
                <DeleteBtn onClick={() => handleDeletePost(post.boardId)}>
                  게시글 삭제
                </DeleteBtn>
              </CommunityBtn>
            </Card>
          ))}
        </Cards>
      </CardContents>
    </Container>
  );
}

export default Form;

const Container = styled.div`
  height: 800px;
`;

const BtnHeader = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;

const WriteBtn = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 0px 16px;
  height: 40px;
  width: 90px;
  color: #4171d6;
  background-color: #ecf2ff;
  border-radius: 4px;
`;

const FileLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 150px;
  background-color: #ecf2ff;
  color: #4171d6;
  margin-right: 5px;
  border-radius: 3px;
  cursor: pointer;
  opacity: 1;
  transition: 0.5s;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background: #9cb3e4;
    color: white;
    font-weight: bold;
    opacity: 1;
  }
`;

const FileNameDiv = styled.div`
  height: 40px;
  background: #ecf2ff;
  color: #4171d6;
  display: flex;
  align-items: center;
  border-radius: 3px;
  margin-right: 5px;
`;

const RegistrationBtn = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 0px 16px;
  height: 40px;
  width: 90px;
  color: #4171d6;
  background-color: #ecf2ff;
  border-radius: 3px;
  cursor: pointer;
  opacity: 1;
  transition: 0.5s;
  &:hover {
    background: #9cb3e4;
    color: white;
    font-weight: bold;
    opacity: 1;
  }
`;

// card contents

const CardContents = styled.div`
  background: #ececec;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Cards = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  height: 100px;
  background: #ececec;
  width: 1080px;
`;

const Card = styled.div`
  border-radius: 4px;
  background-color: #fff;
  width: 264px;
  height: 270px;
`;

const CardName = styled.div`
  display: flex;
  margin-top: 8px;
  font-size: 20px;
  color: #202d37;
  font-weight: bold;
  line-height: 22px;
  justify-content: center;
`;

const CardText = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: 16px;
  font-size: 15px;
  color: #57646f;
  margin-top: 3px;
`;

const CommunityBtn = styled.div`
  padding: 0px 12px 12px;
  margin-top: 25px;
`;

const DetailsBtn = styled.button`
  width: 100%;
  font-size: 12px;
  line-height: 16px;
  padding: 0px 12px;
  height: 28px;
  color: #202d37;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: #dbe0e4;
  vertical-align: middle;
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: center center;
`;

const DeleteBtn = styled.button`
  width: 100%;
  font-size: 12px;
  line-height: 16px;
  padding: 0px 12px;
  height: 28px;
  color: #202d37;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: #dbe0e4;
  border-radius: 4px;
  margin-top: 5px;
`;
