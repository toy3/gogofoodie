import React from "react";
import styled from "styled-components";

const TodoHeadWrap = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .title {
    color: #20c997;
    font-size: 20px;
    margin-top: 40px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export default function TodoHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  return (
    <TodoHeadWrap>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="title">gogo foodie</div>
    </TodoHeadWrap>
  );
}
