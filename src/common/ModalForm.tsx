import * as React from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../redux/store";
import useInput from "../hooks/useInput";
import { ADD_MOTION } from "../redux/motionSlice";

interface ModalProps {
  title: string;
  body: string;
  type: string;
  placeholder: string;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface itemProps {
  id: number;
  title: string;
  body: string;
  type: string;
}

function ModalForm({
  title,
  body,
  type,
  setModalOpen,
  placeholder,
}: ModalProps) {
  const { motionList } = useAppSelector((state) => state.motion);

  const inputTitle = useInput();
  const inputSubTitle = useInput();
  const dispatch = useAppDispatch();

  const submitCtrl = () => {
    let contents: itemProps = {
      id: !motionList.length
        ? 0
        : Math.max(...motionList.map((item) => item.id)) + 1,
      title: inputTitle.value,
      body: inputSubTitle.value,
      type: type,
    };
    if (type === "image") {
      contents.body = "https://picsum.photos/200/200";
    }
    const setMotionList = [...motionList, contents];
    dispatch(ADD_MOTION(setMotionList));
    setModalOpen(false);
  };

  return (
    <FormContainer>
      <ModalTitle>{title}</ModalTitle>
      <ModalInput value={inputTitle.value} onChange={inputTitle.onChangeForm} />
      <ModalTitle>{body}</ModalTitle>
      <ModalInput
        value={inputSubTitle.value}
        onChange={inputSubTitle.onChangeForm}
        placeholder={placeholder}
      />
      <SubmitBtn onClick={submitCtrl}>OK</SubmitBtn>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ModalTitle = styled.h1`
  margin-bottom: 3px;
  margin-top: 5px;
  color: gray;
`;
const ModalInput = styled.input`
  height: 30px;
`;

const SubmitBtn = styled.button`
  margin-top: 30px;
  height: 40px;
  background-color: #4b89dc;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

export default ModalForm;
