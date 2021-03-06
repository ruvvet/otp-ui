import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Callback from './components/Callback';
import Login from './components/Login';
import Logout from './components/Logout/Logout';
import Main from './components/Main';
import PrivateRoute from './components/utility/PrivateRoute';
import OTPRequest from './utils';

function App() {
  const history = useHistory();

  const [socket, setSocket] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // useEffect (()=>{

  //   const socket = io('http://localhost:5000')

  //   setSocket(socket);
  //   socket.emit('hi', new Date())

  //   socket.on('FromAPI', (msg)=>{console.log(msg)})

  // }, [])

  useEffect(() => {
    const checkJWT = async () => {
      const response = await OTPRequest('/authorize/token', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => {
        setError(true);
        return null;
      });

      if (response === '401') {
        history.push('/login');
      } else if (response) {
        localStorage.setItem('OTP_TOKEN', response);
      }
      setLoading(false);
    };
    checkJWT();
  }, []);

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
        <PrivateRoute path="/">
          <Main />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;

// header
// card
