import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Display from '../display/Display';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Switch, Route } from 'react-router-dom';
import './main.css';
//import './starbg.css';
import Messages from '../chat/Messages';
import Chat from '../chat/Chat';
import Settings from '../settings/Settings';
import Profile from '../profile/Profile';
import About from '../About/About';
import { useDispatch, useSelector } from 'react-redux';
import { initializeProfile } from '../../store/profileSlice';
import OTPRequest from '../../utils';

export default function Main() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getProfile = async () => {
      const response = await OTPRequest('/profile', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => {
        setError(true);
        return null;
      });

      if (response) {
        console.log(response);
        dispatch(initializeProfile(response));
        setLoading(false);
      }
    };
    getProfile();
  }, []);

  return (
    <Container className="main-container" maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        className="main-grid"
      >
        <Header />

        <Switch>
          <Route path="/swipes">
            <Messages />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/messages/:id">
            <Chat />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>

          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Display />
          </Route>
        </Switch>

        <Footer />
      </Grid>
    </Container>
  );
}
