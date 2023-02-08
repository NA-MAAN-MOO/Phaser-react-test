import React, { useState } from "react";
import Game from "./pages/Game";
import Start from "./pages/Start";
import Editor from "./pages/Editor";
import { GAME_STATUS } from "./utils/Constants";
import { useGame } from "./hooks/useGameContext";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./stores";
import { openGame, openEditor, openMain } from "./stores/modeSlice";

const HoverDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

function Main() {
  const { MAIN, GAME, EDITOR } = GAME_STATUS;
  const status = useSelector((state: RootState) => state.mode.status);
  const dispatch = useDispatch();

  // const { status, openGame, openEditor, openMain } = useGame();

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
