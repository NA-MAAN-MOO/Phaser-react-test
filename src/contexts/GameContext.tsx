import { createContext, useState } from "react";
import { GAME_STATUS } from "../utils/Constants";

export const GameContext = createContext({
  status: "",
  openMain: () => {},
  openGame: () => {},
  openEditor: () => {},
});

const GameContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState(GAME_STATUS.MAIN);

  const openMain = () => setStatus(GAME_STATUS.MAIN);
  const openGame = () => setStatus(GAME_STATUS.GAME);
  const openEditor = () => setStatus(GAME_STATUS.EDITOR);
  return (
    <GameContext.Provider value={{ status, openMain, openGame, openEditor }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
