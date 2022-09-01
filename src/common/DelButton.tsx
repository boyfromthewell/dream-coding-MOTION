import * as React from "react";
import styled from "styled-components";
import { DEL_MOTION } from "../redux/motionSlice";
import { useAppSelector, useAppDispatch } from "../redux/store";
type ItemProps = { itemId: number };

function DelButton({ itemId }: ItemProps) {
  const { motionList } = useAppSelector((state) => state.motion);
  const dispatch = useAppDispatch();

  const delItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    const itemId: string = e.currentTarget.value;
    const newMotionList = motionList.filter((item) => {
      return item.id !== Number(itemId);
    });
    dispatch(DEL_MOTION(newMotionList));
  };

  return (
    <BtnContainer>
      <DelBtn value={itemId} onClick={delItem}>
        X
      </DelBtn>
    </BtnContainer>
  );
}
const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const DelBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #4b89dc;
  font-size: 20px;
  font-weight: 600;
`;
export default DelButton;
