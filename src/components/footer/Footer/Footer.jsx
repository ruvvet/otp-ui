import { Container, Grid } from '@material-ui/core';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <Container className="footer-container" maxWidth="sm">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <PersonRoundedIcon
          className="icon"
          style={{ color: '#FFFFFF', fontSize: 'large' }}
        />
        <FavoriteBorderRoundedIcon className="icon" />
        <MessageRoundedIcon className="icon" />
      </Grid>
    </Container>
  );
}
