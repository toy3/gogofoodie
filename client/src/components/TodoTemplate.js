import React from "react";
import styled from "styled-components";

const TodoTemplateWrap = styled.div`
  position: relative;
  width: calc(100% - 56vw);
  max-width: 845px;
  height: 768px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  margin: 86px 28vw 40px;
  display: flex;
  flex-direction: column;
`;

export default function TodoTemplate({ children }) {
  return <TodoTemplateWrap>{children}</TodoTemplateWrap>;
}
