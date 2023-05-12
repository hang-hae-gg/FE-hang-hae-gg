import React from "react";
import styled from "styled-components";

export const ScoreSearch = () => {
  return (
    <Container>
      <Contents>
        <UserDataDiv>
          <UserIcon>아이콘</UserIcon>
          <UserInfo>
            <UserNickName>유저 닉네임</UserNickName>
            <RenewalBtn>전적 갱신</RenewalBtn>
          </UserInfo>
          <TierInfo>
            <TierIcon></TierIcon>
            <TierPercentage>
              <TierName>티어/점수</TierName>
              <WinningRate>승률 (승리 횟수/ 패배 횟수)</WinningRate>
            </TierPercentage>
          </TierInfo>
        </UserDataDiv>
        <UserScore></UserScore>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 1000px;
  width: 100%;
  background-color: beige;
`;

const Contents = styled.div`
  width: 100%;
  display: block;
`;

const UserDataDiv = styled.div`
  display: flex;
  height: 200px;
  width: 1000px;
  background: red;
  border-radius: 10px;
  align-items: center;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
`;

const UserIcon = styled.div`
  display: flex;
  height: 120px;
  width: 120px;
  border-radius: 10px;
  background: white;
  justify-content: center;
  align-items: center;
  float: left;
  margin-left: 50px;
`;

const UserInfo = styled.div`
  margin-left: 30px;
`;

const UserNickName = styled.div`
  margin-bottom: 20px;
`;

const RenewalBtn = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  background: white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const TierInfo = styled.div`
  display: flex;
  width: 400px;
  height: 140px;
  background: white;
  margin: 0px auto 0 auto;
  border-radius: 10px;
  align-items: center;
`;

const TierIcon = styled.div`
  width: 100px;
  height: 100px;
  background: pink;
  border-radius: 10px;
  margin-left: 25px;
`;

const TierPercentage = styled.div``;

const TierName = styled.div`
  padding: 10px;
`;

const WinningRate = styled.div`
  padding: 10px;
`;

const UserScore = styled.div`
  width: 700px;
  height: 300px;
  background-color: white;
`;
