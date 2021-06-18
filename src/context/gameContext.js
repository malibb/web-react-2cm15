import React, { useContext, useEffect, useState } from 'react';
import { levelsFigures, levelsNumbers } from '../utils/const';
import axios from 'axios';

const gameContext = React.createContext(undefined);
  
const GameProvider = ({ children }) => {
  const [game, setGames] = useState({
    levelsF: levelsFigures,
    levelsN: levelsNumbers,
    actualLevel: {},
  });

  useEffect(() => {
    axios.get('http://localhost:8080/CrudFracciones/GameInfo')
      .then(({data, status})=> {
        setGame({
          levelsF: data,
          levelsN: levelsNumbers,
          actualLevel: {},
        });
        console.log(data, status);
      })
      .catch((e) => {
        console.log('Hay ocurrido un problema, pero aún puedes utilizar los niveles por default', e);
        setGame({
          levelsF: levelsFigures,
          levelsN: levelsNumbers,
          actualLevel: {},
        });
      })
  }, []);

  const setGame = (newState) => {
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