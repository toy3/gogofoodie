import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";
import useAsync from "../useAsync";
axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "/" : "https://openapi.naver.com";

const MessageWrap = styled.div`
  position: absolute;
  right: 30px;
  top: 171px;
  font-size: 16px;
  color: #495057;
`;

const HiddenWrap = styled.div`
  font-size: 0;
  color: transparent;
`;

export default function GetAddress({ store }) {
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const skip = store !== null ? false : true;
  async function getAddress() {
    const optionConfig = {
      url: "/api/data",
      params: {
        query: store,
      },
    };
    const response = await axios(optionConfig);
    return response.data.items[0].address;
  }

  // eslint-disable-next-line
  const [state, refetch] = useAsync(getAddress, [store], skip);
  const { loading, data: address, error } = state;

  useLayoutEffect(() => {
    if (skip || address === null) return;
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: store,
        done: false,
        address: address,
        rating: 0,
      },
    });
    nextId.current += 1;

    // eslint-disable-next-line
  }, [address, nextId]);

  if (store && loading) return <MessageWrap>로딩중...</MessageWrap>;
  if (error)
    return <MessageWrap>ERROR : 가게명을 정확히 입력하세요.</MessageWrap>;
  return <HiddenWrap>address</HiddenWrap>;
}
