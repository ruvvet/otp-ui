import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Callback from './components/Callback';
import Login from './components/Login';
import Logout from './components/Logout/Logout';
import Main from './components/Main';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/callback">
          <Callback />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// header
// card
