import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";
import StarRating from "./StarRating";

// 1. 체크
const CheckCircle = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 22px;
  margin-left: 5px;
  border-radius: 50%;
  border: 1px solid #ced4da;
  font-size: 20px;
  cursor: pointer;

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

// 2. 가게명
const Text = styled.div`
  width: 20%;
  margin-right: 14px;
  font-size: 16px;
  color: #495057;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

// 3. 주소
const Address = styled.div`
  width: 50%;
  margin-right: 22px;
  color: #495057;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

// 4. 별점

// 5. 삭제
const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemWrap = styled.li`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

function TodoItem({ id, done, text, address, rating }) {
  const dispatch = useTodoDispatch();
  const onToggle = () =>
    dispatch({
      type: "TOGGLE",
      id,
    });
  const onRemove = () =>
    dispatch({
      type: "REMOVE",
      id,
    });
  const onRate = (rating) =>
    dispatch({
      type: "RATE",
      id,
      rating,
    });

  return (
    <TodoItemWrap>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Address done={done}>{address}</Address>
      <StarRating
        done={done}
        selectedStars={rating}
        onRate={(rating) => onRate(rating)}
      />
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemWrap>
  );
}

export default React.memo(TodoItem);
