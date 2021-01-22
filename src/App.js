import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { 
  BrowserRouter as Router,
  Switch,
  Route, } from 'react-router-dom'

import { Start } from 'components/Start'
import { Highscore} from 'components/Highscore'
import { Task1 } from 'components/tasks/Task1'
import { GameBoard } from 'components/GameBoard'
import { EndGame } from "components/EndGame"
import { game } from 'reducers/game'


const reducer = combineReducers({game: game.reducer })
const store = configureStore({reducer})

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
          <Route path="/endgame" exact>
            <EndGame />
          </Route>
          <Route path="/highscore" exact>
            <Highscore />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}
