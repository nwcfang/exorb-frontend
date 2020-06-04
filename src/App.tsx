import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {LoginPage} from "./components/LoginPage";
import {HomePage} from "./components/HomePage";

import './App.less';

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
