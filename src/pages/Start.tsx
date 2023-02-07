import React, { useState } from "react";
import { useGame } from "../hooks/useGameContext";
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
  const { openGame } = useGame();
  return (
    <StartDiv>
      <button type="button" onClick={() => openGame()}>
        게임 시작하기
      </button>
    </StartDiv>
  );
};

export default Start;
