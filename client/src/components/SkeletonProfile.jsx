import React from "react";
import styled from "styled-components";

const SkeletonProfile = () => {
  return (
    <Contents>
      <UserInfoHeader>
        <UserDataDiv>
          <IconDiv></IconDiv>
          <UserInfo>
            <TierList>
              <SeasonTier></SeasonTier>
            </TierList>
            <UserName>
              <UserBookMark></UserBookMark>
            </UserName>
            <UserRanking></UserRanking>
            <RiotBtn></RiotBtn>
            <InfoDiv>
              <RenewalBtn></RenewalBtn>
              <TierGraph></TierGraph>
            </InfoDiv>
            <UserUpdate></UserUpdate>
          </UserInfo>
        </UserDataDiv>
        <ClassifyDiv>
          <ClassifyInfo>
            <SynthesisBtn></SynthesisBtn>
            <ChampionBtn></ChampionBtn>
            <IngameInfo></IngameInfo>
          </ClassifyInfo>
        </ClassifyDiv>
      </UserInfoHeader>
    </Contents>
  );
};

export default SkeletonProfile;

const Container = styled.div`
  display: flex;
  height: 1000px;
  width: 100%;
  background-color: #ebeef1;
`;

const Contents = styled.div`
  width: 100%;
  display: block;
`;

const UserDataDiv = styled.div`
  display: flex;
  height: 200px;
  width: 1100px;
  background: white;
  border-radius: 10px;
  align-items: center;
  margin: 0 auto;
  display: flex;
  position: relative;
`;

const IconDiv = styled.div`
  height: 100px;
  width: 100px;
  background-color: #ddd;
  border-radius: 10px;
  position: relative;

  img {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    background: white;
    justify-content: center;
    align-items: center;
    float: left;
    vertical-align: middle;
  }
`;

const UserInfoHeader = styled.div`
  background-color: white;
`;

const UserInfo = styled.div`
  margin-left: 24px;
`;

const TierList = styled.div`
  width: 946px;
  height: 32px;
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 32px;
  background-color: #ddd;
  font-size: 24px;
  font-weight: bold;
  color: #202d37;
`;

const UserBookMark = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  border: 1px solid #dbe0e4;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 0px 8px;
`;

const UserRanking = styled.div`
  color: #758592;
  background-color: #ddd;
  width: 200px;
  height: 15px;
  margin-top: 8px;
  font-size: 12px;
`;

const RiotBtn = styled.button`
  border-color: #ddd;
  background-color: #ddd;
  display: inline-flex;
  align-items: center;
  padding: 5px 8px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  width: 250px;
  height: 30px;
  margin-top: 5px;
  font-size: 12px;
  gap: 8px;
`;

const SeasonTier = styled.div`
  font-size: 11px;
  color: #9aa4af;
  padding: 0 4px;
  height: 15px;
  background-color: #ddd;
  width: 105px;
`;

const InfoDiv = styled.div`
  display: flex;
  margin-top: 8px;
`;

const RenewalBtn = styled.button`
  padding: 0 14px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  margin-right: 8px;
  width: 80px;
  height: 40px;
  display: flex;
  text-align: center;
  align-items: center;
  border: 1px solid #ddd;
  background: #ddd;
  color: #ddd;
`;

const TierGraph = styled.button`
  padding: 0 14px;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 8px;
  height: 40px;
  width: 80px;
  display: flex;
  text-align: center;
  align-items: center;
  border: 1px solid #ddd;
  background: #ddd;
  color: #ddd;
`;

const UserUpdate = styled.div`
  margin-top: 8px;
  font-size: 12px;
  background-color: #ddd;
  color: #9aa4af;
  width: max-content;
`;

const ClassifyDiv = styled.div`
  display: flex;
  position: relative;
  background: white;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  border-top: 1px solid;
  border-color: #ebeef1;
`;

const ClassifyInfo = styled.div`
  width: 1100px;
  display: flex;
  align-items: center;
  height: 50px;
  margin: 0 auto;
`;

const SynthesisBtn = styled.button`
  width: 92px;
  height: 36px;
  background: #ddd;
  line-height: 36px;
  margin-right: 4px;
  color: #4171d6;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  border-radius: 4px;
`;

const ChampionBtn = styled.button`
  width: 92px;
  height: 36px;
  background: #ddd;
  line-height: 36px;
  margin-right: 4px;
  color: black;
  font-size: 14px;
  text-align: center;
  border-radius: 4px;
  &:hover {
    background: #f7f7f9;
  }
`;

const IngameInfo = styled.button`
  width: 92px;
  height: 36px;
  background: #ddd;
  line-height: 36px;
  margin-right: 4px;
  color: #00a399;
  font-size: 14px;
  text-align: center;
  border-radius: 4px;
  &:hover {
    background: #f7f7f9;
  }
`;

const UserInfoBody = styled.div`
  display: flex;
  justify-content: center;
`;

const UserTierInfo = styled.div`
  width: 332px;
  display: inline-block;
  font-size: 12px;
  min-height: 870px;
`;

const UserTier = styled.div`
  margin-top: 8px;
  border-radius: 4px;
  background-color: #fff;
`;

const SoloRank = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  font-size: 14px;
  color: #202d37;
  height: 35px;
  align-items: center;
`;

const RankScore = styled.div`
  height: 97px;
  display: flex;
  align-items: center;
  padding: 12px;
  border-top: 1px solid;
  border-color: #ebeef1;
`;

const RankName = styled.div`
  width: 157px;
  height: 26px;
  font-size: 20px;
  font-weight: bold;
  color: #202d37;
`;

const RankLp = styled.div`
  font-size: 12px;
  color: #758592;
  margin-top: 2px;
`;

const ScoreWinLose = styled.div`
  width: 64px;
  height: 24px;
  font-size: 11px;
  text-align: right;
  color: #9aa4af;
`;

const ScorePercentage = styled.div`
  margin-top: 2px;
  font-size: 11px;
`;

const WinScoreContent = styled.div`
  display: flex;
  background-color: #ecf2ff;
  width: 740px;
  height: 96px;
  border-radius: 4px;
  border-left-width: 6px;
  border-left-style: solid;
  border-color: #5383e8;
  margin-bottom: 8px;
`;

const LoseScoreContent = styled.div`
  display: flex;
  background-color: #fff1f3;
  width: 740px;
  height: 96px;
  border-radius: 4px;
  border-left-width: 6px;
  border-left-style: solid;
  border-color: #e84057;
  margin-bottom: 8px;
`;

const GameInfo = styled.div`
  width: 108px;
  color: #758592;
  margin-left: 12px;
  margin: auto 0px auto 12px;
`;

const WinGameType = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #4171d6;
`;

const LoseGameType = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #d31a45;
`;

const GameTime = styled.div`
  color: #758592;
  font-size: 12px;
`;

const GameLine = styled.div`
  width: 48px;
  height: 1px;
  margin: 8px 0px 4px;
  background-color: #d5e3ff;
`;

const GameResult = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const GameLength = styled.div`
  font-size: 12px;
`;

const PlayChampion = styled.div`
  width: 48px;
  height: 48px;
  margin: auto 0 auto 0;
`;

const PlayKda = styled.div`
  display: flex;
  width: 107px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const PlayKdaInfo = styled.div`
  font-size: 15px;
  color: #9aa4af;
  display: flex;
`;

const PlayKill = styled.div`
  color: #202d37;
  margin-right: 2px;
`;

const PlayDeath = styled.div`
  color: #d31a45;
  font-weight: bold;
  margin: 0px 2px 0px 2px;
`;

const PlayAssist = styled.div`
  color: #202d37;
  margin-left: 2px;
`;
