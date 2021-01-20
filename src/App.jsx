import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Callback from './components/Callback';
import Login from './components/Login';
import Logout from './components/Logout/Logout';
import Main from './components/Main';
import io from 'socket.io-client';
import OTPRequest from './utils';



function App() {
  const history = useHistory();
  console.log(localStorage.getItem('OTP_TOKEN'));


  const [socket, setSocket] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  // useEffect (()=>{

  //   const socket = io('http://localhost:5000')

  //   setSocket(socket);
  //   socket.emit('hi', new Date())



  //   socket.on('FromAPI', (msg)=>{console.log(msg)})

  // }, [])

  useEffect(() => {
    const checkJWT = async () => {
      const response = await OTPRequest('/authorize/refreshJWT', {
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

  console.log(localStorage.getItem('OTP_TOKEN'));

  return (
    <div
      className="app"
      // style={{
      //   background: `radial-gradient(circle, #${color} 0%, #dedede50 100%)`,
      // }}
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
