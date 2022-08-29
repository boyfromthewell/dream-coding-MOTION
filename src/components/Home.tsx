import * as React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import ModalForm from "../common/ModalForm";
import { ModalStyle } from "../common/styles/ModalStyle";
import { useSelector } from "react-redux";
function Home() {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [modalType, setModalType] = React.useState<string>("");
  const state = useSelector((state) => state);
  console.log(state);
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
      <ItemContainer></ItemContainer>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={ModalStyle}
      >
        {modalType === "image" ? (
          <ModalForm title="title" body="url" type="image" />
        ) : null}
        {modalType === "video" ? (
          <ModalForm title="title" body="url" type="video" />
        ) : null}
        {modalType === "note" ? (
          <ModalForm title="title" body="url" type="note" />
        ) : null}
        {modalType === "task" ? (
          <ModalForm title="title" body="url" type="task" />
        ) : null}
      </Modal>
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
  border: none;
  border-radius: 7px;
  height: 50px;
  width: 20%;
  color: white;
  font-size: 17px;
  cursor: pointer;
`;
export default Home;
