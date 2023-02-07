import React, { useState } from "react";
import Game from "./pages/Game";
import Start from "./pages/Start";
import Editor from "./pages/Editor";
import { GAME_STATUS } from "./utils/Constants";
import { useGame } from "./hooks/useGameContext";
import styled from "styled-components";

const HoverDiv = styled.div`
  position: absolute;
  height: 500px;
  width: 800px;
`;

function Main() {
  const { MAIN, GAME, EDITOR } = GAME_STATUS;
  const { status, openGame, openEditor, openMain } = useGame();

  return (
    <HoverDiv>
      {status === MAIN ? (
        <Start></Start>
      ) : status === GAME ? (
        <Game></Game>
      ) : (
        <Editor></Editor>
      )}
    </HoverDiv>
  );
}

export default Main;
