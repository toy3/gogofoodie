import React from "react";
import styled from "styled-components";

const TodoTemplateWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 845px;
  height: 768px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  margin: 86px auto 40px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1280px) {
    width: calc(100% - 12vw);
    margin: 60px auto 70px;
  }
`;

export default function TodoTemplate({ children }) {
  return <TodoTemplateWrap>{children}</TodoTemplateWrap>;
}
