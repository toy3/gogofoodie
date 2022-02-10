import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoListWrap = styled.div`
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TodoListInner = styled.ul`
  flex: 1;
  min-width: 800px;
  padding: 20px 32px 48px;
  overflow-y: auto;
  white-space: nowrap;
  box-sizing: border-box;
`;

export default function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListWrap>
      <TodoListInner>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
            address={todo.address}
            rating={todo.rating}
          />
        ))}
      </TodoListInner>
    </TodoListWrap>
  );
}
