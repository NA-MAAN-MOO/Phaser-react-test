import React, { useState } from "react";
import { useGame } from "../hooks/useGameContext";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  width: 800px;
  height: 500px;
  position: relative;
  border: 4px solid green;
`;
const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
const Game = () => {
  const { openEditor, openMain } = useGame();
  return (
    <BackgroundDiv>
      <BtnDiv>
        <button type="button" onClick={() => openEditor()}>
          에디터 키기
        </button>
        <button type="button" onClick={() => openMain()}>
          메인으로 가기
        </button>
      </BtnDiv>
    </BackgroundDiv>
  );
};

export default Game;
