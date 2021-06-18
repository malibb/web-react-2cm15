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

  const createForm = (inputs) => {
    const params = new FormData();
    Object.keys(inputs).map(e => params.append(e, inputs[e]));
    return params;
  }
  const getGame = () => {
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
      });
  };

  const createGame = (inputs) => {
    const params = createForm(inputs);
    axios({
      method: "post",
      url: 'http://localhost:8080/CrudFracciones/NuevoNivel',
      data: params,
      headers: {"Content-Type": "multipart/form-data"}
    })
      .then(({data, status})=> {
        getGame();
        console.log(data, status);
      })
      .catch((e) => {
        console.log('Hay ocurrido un problema', e);
      });
  };

  const editGame = (inputs, id) => {
    const params = createForm(inputs);
    axios({
      method: "post",
      url: 'http://localhost:8080/CrudFracciones/UpdateLevel?id='+ id,
      data: params,
      headers: {"Content-Type": "multipart/form-data"}
    })
      .then(({data, status})=> {
        getGame();
        console.log(data, status);
      })
      .catch((e) => {
        console.log('Hay ocurrido un problema', e);
      });
  };

  const deleteGame = (id) => {
    axios({
      method: "post",
      url: 'http://localhost:8080/CrudFracciones/DeleteLevel?id='+id,
      data: {},
      headers: {"Content-Type": "multipart/form-data"}
    })
      .then(({data, status})=> {
        getGame();
        console.log(data, status);
      })
      .catch((e) => {
        console.log('Hay ocurrido un problema', e);
      });
  };

  useEffect(() => {
    getGame();
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
      createGame,
      editGame,
      deleteGame,
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