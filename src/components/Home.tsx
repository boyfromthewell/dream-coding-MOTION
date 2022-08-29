import * as React from "react";
import styled from "styled-components";
function Home() {
  return (
    <MainContainer>
      <ButtonContainer>
        <MotionButton>IMAGE</MotionButton>
        <MotionButton>VIDEO</MotionButton>
        <MotionButton>NOTE</MotionButton>
        <MotionButton>TASK</MotionButton>
      </ButtonContainer>
      <ItemContainer></ItemContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div``;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;
const ItemContainer = styled.div``;
const MotionButton = styled.button`
  background-color: #4b89dc;
  border: 1px solid white;
  border-radius: 7px;
  height: 50px;
  width: 20%;
  color: white;
  font-size: 17px;
  cursor: pointer;
`;
export default Home;
