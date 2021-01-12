import React from 'react';
import './header.css';
import { Container, Grid, IconButton, Popover, Badge } from '@material-ui/core';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';

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
          <SettingsRoundedIcon className="icon" />
        </IconButton>
        {/* <Popover
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        > */}
        <div>
          <img src="./img/heart.png" />
        </div>
        {/* </Popover> */}

        <IconButton>
          <Badge
            badgeContent={100}
            color="primary"
            className="badge"
            showZero
            max={99}
            overlap="circle"
          >
            <NotificationsRoundedIcon className="icon" />
          </Badge>
        </IconButton>
      </Grid>
    </Container>
  );
}
