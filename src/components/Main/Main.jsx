import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { initializeProfile } from '../../store/profileSlice';
import OTPRequest from '../../utils';
import About from '../About/About';
import Chat from '../chat/Chat';
import Messages from '../chat/Messages';
import Matches from '../match/Matches';
import Display from '../display/Display';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Profile from '../profile/Profile';
import Settings from '../settings/Settings';
import './main.css';

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
          <Route path="/matches">
            <Matches />
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
