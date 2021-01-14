import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Display from '../display/Display';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Switch, Route } from 'react-router-dom';
import './main.css';
import './starbg.css';
import Messages from '../chat/Messages';
import Settings from '../settings/Settings';
import Profile from '../profile/Profile';
import About from '../About/About';

export default function Main() {



  return (
    <Container className="main-container" maxWidth="sm">
      <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        className = "main-grid"

      >
        <Header />

          <Switch>
          <Route path="/swipes">
              <Messages />
            </Route>
          <Route path="/profile">
              <Profile />
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
