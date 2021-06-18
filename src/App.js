import { useState } from 'react';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Levels from './Views/Levels';
import Level from './Views/Level';
import Layout from './components/Layout';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { GameProvider } from './context/gameContext';


function App() {
  const [user] = useState({
    name: 'Mali',
    levels: [{k:1,s:2,t:'F'},{k:1,s:2,t:'F'}, {k:1,s:2,t:'N'}],
  });

/*   const [game, setGame] = useState({
    levelsF: levelsFigures,
    levelsN: levelsNumbers,
    actualLevel: {},
  });

  const dispatchGameEvent = (actionType, payload) => {
		switch (actionType) {
			case 'ADD_ACTUAL_LEVEL':
        console.log('ADD_ACTUAL_LEVEL');
				setGame({
          ...game,
          actualLevel: payload.actualLevel,
          currentAnswer: {}
        });
				return;
      case 'CURRENT_ANSWER':
        console.log('CURRENT_ANSWER');
        setGame({
          ...game,
            currentAnswer: payload.currentAnswer,
        });
        return;
			default:
				return;
		}
	}; */

  return (
      <GameProvider>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Levels/>
              </Route>
              <Route exact path="/level">
                <DndProvider debugMode={true} backend={HTML5Backend}>
                  <Level/>
                </DndProvider>
              </Route>
            </Switch>
          </Layout>
        </Router>
      </GameProvider>
  );
}

export default App;
