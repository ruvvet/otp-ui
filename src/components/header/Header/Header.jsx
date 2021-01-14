import { Badge, Container, Grid, IconButton, Tooltip } from '@material-ui/core';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import ReplyRoundedIcon from '@material-ui/icons/ReplyRounded';
import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import Boop from '../../effects/Boop';
import './header.css';

export default function Header() {
  //TODO: fix the ternary for settings/home button - needs to be in a state?

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  return (
    <Container className="header-container" maxWidth="sm">
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Boop rotation={10} timing={150}>
          <Tooltip
            title={
              window.location.pathname === '/settings' ? 'Main' : 'Settings'
            }
            style={{ padding: 0 }}
          >
            <Link
              to={window.location.pathname === '/settings' ? '/' : '/settings'}
            >
              <IconButton>
                {window.location.pathname === '/settings' ? (
                  <ReplyRoundedIcon className="icon" />
                ) : (
                  <SettingsRoundedIcon className="icon" />
                )}
              </IconButton>
            </Link>
          </Tooltip>
        </Boop>

        <div>
          <img src="../img/otp.png" />
        </div>

        <Boop rotation={10} timing={150}>
          <Tooltip title="Notifications" style={{ padding: 0 }}>
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
