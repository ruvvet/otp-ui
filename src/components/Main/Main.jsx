import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Display from '../display/Display';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Switch, Route } from 'react-router-dom';
import './main.css';

export default function Main() {
  return (
    <Container className="main-container" maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Header />
        <Switch>
          <Route path="/messages">
            <div>chat component here</div>
          </Route>
          <Route path="/settings">
            <div>Settings component here</div>
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
