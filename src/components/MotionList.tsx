import * as React from "react";
import { useAppSelector } from "../redux/store";
import styled from "styled-components";
import ReactPlayer from "react-player";
import DelButton from "../common/DelButton";
function MotionList() {
  const { motionList } = useAppSelector((state) => state.motion);

  return (
    <MotionContainer>
      {motionList &&
        motionList.map((item) => {
          if (item.type === "image") {
            return (
              <ItemContainer key={item.id}>
                <DelButton itemId={item.id} />
                <div style={{ display: "flex" }}>
                  <MotionImage src={item.body} alt="image" />
                  <MotionTitle>{item.title}</MotionTitle>
                </div>
              </ItemContainer>
            );
          } else if (item.type === "video") {
            return (
              <VideoContainer key={item.id}>
                <DelButton itemId={item.id} />
                <MotionTitle>{item.title}</MotionTitle>
                <ReactPlayer
                  url={item.body}
                  controls
                  playing={true}
                  width="500px"
                  height="400px"
                  style={{ marginLeft: "10px" }}
                />
              </VideoContainer>
            );
          } else if (item.type === "note") {
            return (
              <NoteContainer key={item.id}>
                <DelButton itemId={item.id} />
                <NoteTitle>{item.title}</NoteTitle>
                <NoteBody>{item.body}</NoteBody>
              </NoteContainer>
            );
          } else {
            return (
              <NoteContainer key={item.id}>
                <DelButton itemId={item.id} />
                <NoteTitle>{item.title}</NoteTitle>
                <div>
                  <CheckBox type="checkbox" id={item.title} />
                  <CheckLabel htmlFor={item.title}>{item.body}</CheckLabel>
                </div>
              </NoteContainer>
            );
          }
        })}
    </MotionContainer>
  );
}

const MotionContainer = styled.div`
  margin-top: 30px;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 12px;
  padding: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
`;
const VideoContainer = styled(ItemContainer)`
  flex-direction: column;
`;

const NoteContainer = styled(ItemContainer)`
  flex-direction: column;
`;
const MotionImage = styled.img`
  width: 170px;
  height: 170px;
`;
const MotionTitle = styled.p`
  margin-left: 12px;
  font-size: 23px;
  font-weight: 600;
  margin-top: 0;
`;

const NoteTitle = styled.h3`
  font-size: 20px;
  margin-top: 0;
`;
const NoteBody = styled.p``;

const CheckBox = styled.input``;
const CheckLabel = styled.label``;

export default MotionList;
