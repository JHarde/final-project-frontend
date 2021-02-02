import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Start } from "components/Start";
import { Highscore } from "components/Highscore";
import { Task1 } from "components/tasks/Task1";
import { Task2 } from "components/tasks/Task2";
import { Task3 } from "components/tasks/Task3";
import { GameBoard } from "components/GameBoard";
import { EndGame } from "components/EndGame";
import { AboutUs } from "components/AboutUs";
import { game } from "reducers/game";
import { user } from "reducers/user"
import { Login } from "components/Login"
import { SignUp } from "components/SignUp"

const reducer = combineReducers({ game: game.reducer, user: user.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Start />
          </Route>
          <Route path="/gameboard" exact>
            <GameBoard />
          </Route>
          <Route path="/task1" exact>
            <Task1 />
          </Route>
          <Route path="/task2" exact>
            <Task2 />
          </Route>
          <Route path="/task3" exact>
            <Task3 />
          </Route>
          <Route path="/endgame">
            <EndGame />
          </Route>
          <Route path="/highscore" exact>
            <Highscore />
          </Route>
          <Route path="/aboutus" exact>
            <AboutUs />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
