import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import { TodoProvider } from "./TodoContext";
import CreateForm from "./components/CreateForm";
import GetAddress from "./components/GetAddress";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default function App() {
  const [store, setStore] = useState(null);
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <CreateForm onNewStore={(value) => setStore(value)} />
        <GetAddress store={store}></GetAddress>
      </TodoTemplate>
    </TodoProvider>
  );
}
