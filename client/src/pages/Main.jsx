import React from "react";
import LogoOpacity from "../assets/teemoopacitylow.png";
import { styled } from "styled-components";
import Header from "../components/Header";


export const Main = () => {
  return (
    <Container>
      <Header />
      <Contents>
        <LogoDiv>
          <img
            src={LogoOpacity}
            alt="logo"
            style={{
              width: "480px",
              height: "320px",
              margin: "50px 0px 0px 0px",
            }}
          ></img>
        </LogoDiv>
        <SearchDiv>
          <div>
            <SearchForm action="">
              <SearchNameDiv>
                <SearchLabel htmlFor="">Search</SearchLabel>
                <input type="text" placeholder="귀여운 티모"></input>
              </SearchNameDiv>
              <SearchBtn>GG</SearchBtn>
            </SearchForm>
          </div>
        </SearchDiv>
      </Contents>
    </Container>
  );
};

// styled-components

const Container = styled.div`
  height: 1000px;
  width: 100%;
  background-color: white;
`;

const Contents = styled.div`
  width: 1000px;
  display: block;
  margin: 0 auto;
`;

const LogoDiv = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

const SearchDiv = styled.div`
  position: relative;
  width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const SearchForm = styled.form`
  height: 60px;
  border-radius: 20px;
  background-color: #ffd700;
  text-align: left;
  display: flex;
`;

const SearchNameDiv = styled.div`
  padding-left: 32px;
  padding-right: 8px;
  height: 100%;
  display: flex;
  align-items: center;

  input {
    background: #ffd700;
    width: 480px;
    height: 40px;
    font-size: 14px;
    margin-left: 20px;
    margin-right: 20px;
    &:focus {
      outline: none;
    }
  }
`;

const SearchLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

const SearchBtn = styled.button`
  width: 42px;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: bold;
`;
