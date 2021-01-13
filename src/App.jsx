import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Callback from './components/Callback';
import Login from './components/Login';
import Logout from './components/Logout/Logout';
import Main from './components/Main';

function App() {
  const toHex = (d) => {
    const hex = ('0' + Number(d).toString(16)).slice(-2).toUpperCase();
    return hex;
  };

  const date = new Date();
  const s = parseInt((date.getSeconds() * 255) / 59);
  const m = parseInt((date.getMinutes() * 255) / 59);
  const h = parseInt((date.getHours() * 255) / 23);
  const color = `${toHex(h)}${toHex(m)}${toHex(s)}`;

  return (
    <div
      className="app"
      style={{
        background: `radial-gradient(circle, #${color} 0%, #dedede50 100%)`,
      }}
    >
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
