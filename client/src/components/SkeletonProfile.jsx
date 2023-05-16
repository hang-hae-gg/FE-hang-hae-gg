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
