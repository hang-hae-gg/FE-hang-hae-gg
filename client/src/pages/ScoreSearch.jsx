import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Yummi from "../assets/yummiicon.jpeg";
import RiotIcon from "../assets/RiotIcon.png";
import RightArrow from "../assets/rightarrow.png";
import Star from "../assets/star.png";
import Challenger from "../assets/Challenger.png";
import Jinx from "../assets/Jinx.webp";
import { getAPI } from "../axios";
import scoresearchData from "../scoresearchData";

export const ScoreSearch = () => {
  const location = useLocation();
  const summonersInfo = { ...location.state };
  // const [data, setData] = useState();

  // const data = scoresearchData;

  // console.log("data :: ", data);

  // TODO GET 호출
  useEffect(() => {
    getAPI(
      `/summonerByName?page=1&size=10&summonerName=${summonersInfo.summoners}`
    )
      .then((data) => {
        // TODO 서버 API 완료 시 data.data로 변경
        // setData(scoresearchData);
        console.log("data :: ", data);
      })
      .catch((e) => {
        console.log("e :: ", e);
      });
  }, [summonersInfo.summoners]);

  return (
    <Container>
      <Contents>
        <UserInfoHeader>
          <UserDataDiv>
            <IconDiv>
              <img src={Yummi} alt="Icon"></img>
            </IconDiv>
            <UserInfo>
              <TierList>
                <SeasonTier>
                  <b>S2022</b> Challenger
                </SeasonTier>
              </TierList>
              <UserName>
                <h1>최하나</h1>
                <UserBookMark>
                  <img
                    src={Star}
                    style={{
                      width: "16px",
                      height: "16px",
                      opacity: "40%",
                    }}
                    alt="Star"
                  ></img>
                </UserBookMark>
              </UserName>
              <UserRanking>래더 랭킹 1위 (상위 0.00001%)</UserRanking>
              <RiotBtn>
                <img
                  src={RiotIcon}
                  style={{
                    with: "16px",
                    height: "16px",
                  }}
                  alt="RiotIcon"
                ></img>
                라이엇 계정 연동하고 나만의 프로필을 설정해보세요.
                <img
                  src={RightArrow}
                  style={{
                    with: "10px",
                    height: "10px",
                    padding: "0px 5px",
                    opacity: "40%",
                  }}
                  alt="RightArrow"
                ></img>
              </RiotBtn>
              <InfoDiv>
                <RenewalBtn>전적 갱신</RenewalBtn>
                <TierGraph>티어 그래프</TierGraph>
              </InfoDiv>
              <UserUpdate>최근 업데이트: 방금전</UserUpdate>
            </UserInfo>
          </UserDataDiv>
          <ClassifyDiv>
            <ClassifyInfo>
              <SynthesisBtn>종합</SynthesisBtn>
              <ChampionBtn>챔피언</ChampionBtn>
              <IngameInfo>인게임 정보</IngameInfo>
            </ClassifyInfo>
          </ClassifyDiv>
        </UserInfoHeader>
        <UserInfoBody>
          <UserTierInfo>
            <UserTier>
              <SoloRank>솔로랭크</SoloRank>
              <RankScore>
                <div>
                  <img
                    src={Challenger}
                    style={{
                      backgroundColor: "#F7F7F9",
                      borderRadius: "50%",
                      width: "72px",
                    }}
                    alt="Challenger"
                  />
                </div>
                <div
                  style={{
                    marginLeft: "16px",
                  }}
                >
                  <RankName>Challenger</RankName>
                  <RankLp>1,472 LP</RankLp>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    textAlign: "right",
                    color: "#9AA4AF",
                  }}
                >
                  <ScoreWinLose>307승 239패</ScoreWinLose>
                  <ScorePercentage>승률 56%</ScorePercentage>
                </div>
              </RankScore>
            </UserTier>
          </UserTierInfo>
          <div
            style={{
              margin: " 8px 8px 8px 8px",
            }}
          >
            <WinScoreContent>
              <GameInfo>
                <WinGameType>솔랭</WinGameType>
                <GameTime>1분 전</GameTime>
                <GameLine></GameLine>
                <GameResult>승리</GameResult>
                <GameLength>21분 40초</GameLength>
              </GameInfo>
              <PlayChampion>
                <img
                  src={Jinx}
                  style={{
                    borderRadius: "50%",
                  }}
                  alt="ChampionIcon"
                />
              </PlayChampion>
              <PlayKda>
                <PlayKdaInfo>
                  <PlayKill>7</PlayKill>/<PlayDeath>0</PlayDeath>/
                  <PlayAssist>4</PlayAssist>
                </PlayKdaInfo>
              </PlayKda>
            </WinScoreContent>
            <LoseScoreContent>
              <GameInfo>
                <LoseGameType>솔랭</LoseGameType>
                <GameTime>1분 전</GameTime>
                <GameLine></GameLine>
                <GameResult>패배</GameResult>
                <GameLength>21분 40초</GameLength>
              </GameInfo>
              <PlayChampion>
                <img
                  src={Jinx}
                  style={{
                    borderRadius: "50%",
                  }}
                  alt="ChampionIcon"
                />
              </PlayChampion>
              <PlayKda>
                <PlayKdaInfo>
                  <PlayKill>3</PlayKill>/<PlayDeath>11</PlayDeath>/
                  <PlayAssist>1</PlayAssist>
                </PlayKdaInfo>
              </PlayKda>
            </LoseScoreContent>
            <WinScoreContent>
              <GameInfo>
                <WinGameType>솔랭</WinGameType>
                <GameTime>1분 전</GameTime>
                <GameLine></GameLine>
                <GameResult>승리</GameResult>
                <GameLength>21분 40초</GameLength>
              </GameInfo>
              <PlayChampion>
                <img
                  src={Jinx}
                  style={{
                    borderRadius: "50%",
                  }}
                  alt="ChampionIcon"
                />
              </PlayChampion>
              <PlayKda>
                <PlayKdaInfo>
                  <PlayKill>9</PlayKill>/<PlayDeath>2</PlayDeath>/
                  <PlayAssist>1</PlayAssist>
                </PlayKdaInfo>
              </PlayKda>
            </WinScoreContent>
          </div>
        </UserInfoBody>
      </Contents>
    </Container>
  );
};

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
  height: 32px;
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
  font-size: 12px;
`;

const RiotBtn = styled.button`
  border-color: #dbe0e4;
  background-color: #fff;
  display: inline-flex;
  align-items: center;
  padding: 5px 8px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  font-size: 12px;
  gap: 8px;
`;

const SeasonTier = styled.div`
  font-size: 11px;
  color: #9aa4af;
  padding: 0 4px;
  background-color: #ebeef1;
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
  height: 40px;
  display: flex;
  text-align: center;
  align-items: center;
  border: 1px solid #5383e8;
  background: #5383e8;
  color: #fff;
`;

const TierGraph = styled.button`
  padding: 0 14px;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 8px;
  height: 40px;
  display: flex;
  text-align: center;
  align-items: center;
  border: 1px solid #81acff;
  background: #fff;
  color: #4171d6;
`;

const UserUpdate = styled.div`
  margin-top: 8px;
  font-size: 12px;
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
  background: #ecf2ff;
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
  background: white;
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
  background: white;
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
