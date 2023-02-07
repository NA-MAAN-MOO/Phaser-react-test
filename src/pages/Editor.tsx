import React, { useState } from "react";
import { useGame } from "../hooks/useGameContext";
import styled from "styled-components";

const EditorDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  border: 2px solid blue;
  top: 0;
  left: 0;
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

const Editor = () => {
  const { openGame } = useGame();
  return (
    <EditorDiv>
      에디터
      <BtnDiv>
        <button type="button" onClick={() => openGame()}>
          돌아가기
        </button>
      </BtnDiv>
    </EditorDiv>
  );
};

export default Editor;
