import * as React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import ModalForm from "../common/ModalForm";
import MotionList from "./MotionList";
import { ModalStyle } from "../common/styles/ModalStyle";

function Home() {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [modalType, setModalType] = React.useState<string>("");

  const modalCtrl = (e: React.MouseEvent<HTMLButtonElement>) => {
    setModalOpen(true);
    setModalType(e.currentTarget.value);
  };

  return (
    <MainContainer>
      <ButtonContainer>
        <MotionButton onClick={modalCtrl} value="image">
          IMAGE
        </MotionButton>
        <MotionButton onClick={modalCtrl} value="video">
          VIDEO
        </MotionButton>
        <MotionButton onClick={modalCtrl} value="note">
          NOTE
        </MotionButton>
        <MotionButton onClick={modalCtrl} value="task">
          TASK
        </MotionButton>
      </ButtonContainer>
      <ItemContainer>
        <MotionList />
      </ItemContainer>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={ModalStyle}
      >
        {modalType === "image" ? (
          <ModalForm
            title="title"
            body="url"
            type="image"
            setModalOpen={setModalOpen}
            placeholder="https://picsum.photos/200/200"
          />
        ) : null}
        {modalType === "video" ? (
          <ModalForm
            title="title"
            body="url"
            type="video"
            setModalOpen={setModalOpen}
            placeholder="Youtube URL을 입력하세요"
          />
        ) : null}
        {modalType === "note" ? (
          <ModalForm
            title="title"
            body="body"
            type="note"
            setModalOpen={setModalOpen}
            placeholder=""
          />
        ) : null}
        {modalType === "task" ? (
          <ModalForm
            title="title"
            body="body"
            type="task"
            setModalOpen={setModalOpen}
            placeholder=""
          />
        ) : null}
      </Modal>
    </MainContainer>
  );
}

const MainContainer = styled.div``;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
`;
const ItemContainer = styled.div``;
const MotionButton = styled.button`
  background-color: #89b2e9;
  border: none;
  border-radius: 7px;
  height: 50px;
  width: 20%;
  color: white;
  font-size: 17px;
  cursor: pointer;
`;
export default Home;
