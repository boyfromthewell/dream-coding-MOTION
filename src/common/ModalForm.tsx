import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
interface ModalProps {
  title: string;
  body: string;
  type: string;
}
function ModalForm({ title, body, type }: ModalProps) {
  console.log(type);

  const state = useSelector((state) => state);
  console.log(state);
  return (
    <FormContainer>
      <ModalTitle>{title}</ModalTitle>
      <ModalInput />
      <ModalTitle>{body}</ModalTitle>
      <ModalInput />
      <SubmitBtn>OK</SubmitBtn>
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
`;

export default ModalForm;
