import React from "react";
import LogoOpacity from "../assets/teemoopacitylow.png";
import Triangle from "../assets/triangle.png";
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
              <div style={{ margin: "5px" }}>
                <SearchRegion>Region</SearchRegion>
                <SearchLanguage>
                  Korea
                  <img
                    src={Triangle}
                    style={{
                      width: "10px",
                      height: "100%",
                      margin: "3px 0px 0px auto",
                      opacity: "40%",
                    }}
                    alt="Triangle"
                  ></img>
                </SearchLanguage>
              </div>
              <SearchNameDiv>
                <SearchLabel htmlFor="">Search</SearchLabel>
                <input
                  type="text"
                  placeholder="소환사명, 소환사명, ..."
                ></input>
              </SearchNameDiv>
              <SearchBtn>.GG</SearchBtn>
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
  background-color: #5383e8;
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
  margin: 50px 0px 50px;
`;

const SearchDiv = styled.div`
  position: relative;
  width: 850px;
  margin: 0 auto;
  text-align: center;
`;

const SearchForm = styled.form`
  height: 60px;
  border-radius: 30px;
  background-color: white;
  text-align: left;
  display: flex;
  justify-content: center;
`;

const SearchRegion = styled.small`
  width: 194px;
  font-size: 12px;
  font-weight: bold;
  color: #202d37;
`;

const SearchLanguage = styled.div`
  display: flex;
  width: 194px;
  font-size: 12px;
  font-weight: bold;
  color: #aaaaaa;
  cursor: pointer;
`;

const SearchNameDiv = styled.div`
  padding-left: 32px;
  padding-right: 8px;
  margin-top: 9px;
  height: 100%;

  input {
    position: relative;
    background: white;
    width: 480px;
    padding: 20px 0 0;
    font-size: 14px;
    margin-right: 20px;
    &:focus {
      outline: none;
    }
  }
`;

const SearchLabel = styled.label`
  font-size: 11px;
  font-weight: bold;
  color: black;
  position: absolute;
  z-index: 100;
`;

const SearchBtn = styled.button`
  width: 42px;
  padding-left: 12px;
  color: #5383e8;
  font-size: 25px;
  font-weight: bold;
`;
