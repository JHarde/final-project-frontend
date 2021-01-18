import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom'

import { Start } from 'components/Start'
import { Highscore} from 'components/Highscore'
import { Task1 } from 'components/tasks/Task1'
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
          <Route path="/task1" exact>
            <Task1 />
          </Route>
          <Route path="/highscore">
            <Highscore />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}
