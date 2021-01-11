import React from 'react';
import './header.css';
import { Container, Grid, IconButton } from '@material-ui/core';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';

export default function Header() {
  return (
    <Container className="header-container" maxWidth="sm">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <IconButton>
          <SettingsRoundedIcon
            className="icon"
            // style={{ color: '#FFFFFF', fontSize: 40 }}
          />
        </IconButton>
        <div><img src="./img/heart.png"/></div>
        <IconButton>
          <NotificationsNoneRoundedIcon
            className="icon"
            // style={{ color: '#FFFFFF', fontSize: 40 }}
          />
        </IconButton>
      </Grid>
    </Container>
  );
}
