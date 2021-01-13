import { Badge, Container, Grid, IconButton, Tooltip } from '@material-ui/core';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import { React, useState } from 'react';
import Boop from '../../effects/Boop';
import './header.css';

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
          <Tooltip title="Settings" style={{padding:0}}>
            <IconButton>
              <SettingsRoundedIcon className="icon" />
            </IconButton>
          </Tooltip>
        </Boop>

        <div>SWEATT/OTP/IDK</div>

        <Boop rotation={10} timing={150}>
        <Tooltip title="Notifications" style={{padding:0}}>
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
          </Tooltip>
        </Boop>
      </Grid>
    </Container>
  );
}
