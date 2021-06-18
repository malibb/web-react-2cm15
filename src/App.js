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
import Edit from './Views/Edit';
import Layout from './components/Layout';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { GameProvider } from './context/gameContext';
import NewLevel from './Views/NewLevel';


function App() {
  const [user] = useState({
    name: 'Mali',
    levels: [{k:1,s:2,t:'F'},{k:1,s:2,t:'F'}, {k:1,s:2,t:'N'}],
  });

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
              <Route exact path="/edit/:id">
                <Edit></Edit>
              </Route>
              <Route exact path="/level/new">
                <NewLevel></NewLevel>
              </Route>
            </Switch>
          </Layout>
        </Router>
      </GameProvider>
  );
}

export default App;
