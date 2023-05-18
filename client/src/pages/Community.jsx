import Form from "../components/Form";
import Styled, { styled } from "styled-components";

function Community() {
  return (
    <div>
      <CommunityDiv>
        <h1>커뮤니티</h1>
      </CommunityDiv>
      <Form />
    </div>
  );
}

export default Community;

const CommunityDiv = styled.div`
  background-color: white;
  color: black;
  border-bottom: 1px solid #ebeef1;
  h1 {
    width: 1080px;
    margin: 0px auto;
    font-size: 24px;
    padding: 15px 0px;
    font-weight: bold;
  }
`;
