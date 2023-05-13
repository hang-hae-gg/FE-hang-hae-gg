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
        <UserWINScore>
          <GameRecord>
            <GameMode>솔로랭크</GameMode>
            <GameResult>WIN</GameResult>
          </GameRecord>
          <PlayChampion></PlayChampion>
          <UserKda>10 / 0 / 5</UserKda>
        </UserWINScore>
        <UserLOSEScore>
          <GameRecord>
            <GameMode>솔로랭크</GameMode>
            <GameResult>LOSE</GameResult>
          </GameRecord>
          <PlayChampion></PlayChampion>
          <UserKda>2 / 10 / 1</UserKda>
        </UserLOSEScore>
        <UserWINScore>
          <GameRecord>
            <GameMode>솔로랭크</GameMode>
            <GameResult>WIN</GameResult>
          </GameRecord>
          <PlayChampion></PlayChampion>
          <UserKda>5 / 0 / 15</UserKda>
        </UserWINScore>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 1000px;
  width: 100%;
  background-color: white;
`;

const Contents = styled.div`
  width: 100%;
  display: block;
`;

const UserDataDiv = styled.div`
  display: flex;
  height: 200px;
  width: 1100px;
  background: #ffd700;
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
  font-weight: bold;
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
  margin: 0px 50px 0px auto;
  border-radius: 10px;
  align-items: center;
`;

const TierIcon = styled.div`
  width: 100px;
  height: 100px;
  background: #ffd700;
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

const UserWINScore = styled.div`
  display: flex;
  height: 170px;
  width: 800px;
  background: #8383ff;
  border-radius: 10px;
  align-items: center;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
`;

const UserLOSEScore = styled.div`
  display: flex;
  height: 170px;
  width: 800px;
  background: #ff8583;
  border-radius: 10px;
  align-items: center;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
`;

const GameRecord = styled.div`
  padding: 50px;
`;

const GameMode = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;

const GameResult = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;

const PlayChampion = styled.div`
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 5px;
`;

const UserKda = styled.div`
  width: 120px;
  height: 40px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 10px;
  font-weight: bold;
`;
