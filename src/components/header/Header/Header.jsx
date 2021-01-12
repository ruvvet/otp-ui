import {React, useState} from 'react';
import './header.css';
import { Container, Grid, IconButton, Popover, Badge } from '@material-ui/core';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import Boop from '../../effects/Boop';

export default function Header() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  return (
    <Container className="header-container" maxWidth="sm">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Boop rotation={10} timing={150}>
        <IconButton>
          <SettingsRoundedIcon className="icon" />
        </IconButton>
        </Boop>
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
        <Boop rotation={10} timing={150}>
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
        </Boop>
      </Grid>
    </Container>
  );
}
