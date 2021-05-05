import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Home } from '../pages/Home';

export const JikkodexRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={ Home } />
        </Switch>
      </div>
    </Router>
  )
}
