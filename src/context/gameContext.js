import React, { useContext, useState } from 'react';
import { levelsFigures, levelsNumbers } from '../utils/const';
  

const gameContext = React.createContext(undefined);
  
const GameProvider = ({ children }) => {
  const [game, setGames] = useState({
    levelsF: levelsFigures,
    levelsN: levelsNumbers,
    actualLevel: {},
  });

  const setGame = (newState) => {
      console.log(newState);
      setGames(newState);
  } 
  const state = [
    {
      game,
    },
    {
      setGame,
    }
  ];
  return (
    <gameContext.Provider value={state}>
      {children}
    </gameContext.Provider>
  );
};
const useGame = () => {
  const context = useContext(gameContext);
  if (context === undefined) {
    throw new Error('usegame can only be used inside gameContext');
  }
  return context;
};
export {
  GameProvider,
  useGame
};