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
import Login from './Views/Login';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { GameProvider } from './context/gameContext';
import { UserProvider } from './context/userContext';
import NewLevel from './Views/NewLevel';


function App() {
  return (
      <UserProvider>
        <GameProvider>
          <Router basename="CrudFracciones">
            <Layout>
              <Switch>
                <Route exact path="/">
                  <Login/>
                </Route>
                <Route exact path="/levels">
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
      </UserProvider>
  );
}

export default App;
