import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openGame } from "../stores/modeSlice";
import styled from "styled-components";

const StartDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid red;
`;

const Start = () => {
  const dispatch = useDispatch();
  return (
    <StartDiv>
      <button type="button" onClick={() => dispatch(openGame())}>
        게임 시작하기
      </button>
    </StartDiv>
  );
};

export default Start;
