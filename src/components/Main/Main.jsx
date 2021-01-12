import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Display from '../display/Display';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Switch, Route } from 'react-router-dom';
import './main.css';
import Messages from '../chat/Messages';
import Settings from '../settings/Settings';

export default function Main() {
  return (
    <Container className="main-container" maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        className = "main-grid"

      >
        <Header />
        <div >
          <Switch>
            <Route path="/messages">
              <Messages />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/">
              <Display />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Grid>
    </Container>
  );
}
