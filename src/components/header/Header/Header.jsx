import { Badge, Container, Grid, IconButton, Tooltip } from '@material-ui/core';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import ReplyRoundedIcon from '@material-ui/icons/ReplyRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
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
            title={window.location.pathname !== '/' ? 'Main' : 'Settings'}
            style={{ padding: 0 }}
          >
            <Link to={window.location.pathname !== '/' ? '/' : '/settings'}>
              <IconButton>
                {window.location.pathname !== '/' ? (
                  <ReplyRoundedIcon
                    className="icon"
                    style={{ padding: 10, fontSize: '2rem', color: '#dedede' }}
                  />
                ) : (
                  <SettingsRoundedIcon
                    className="icon"
                    style={{ padding: 10, fontSize: '2rem', color: '#dedede' }}
                  />
                )}
              </IconButton>
            </Link>
          </Tooltip>
        </Boop>

        <div>
          <Tooltip title="About OTP" style={{ padding: 0 }}>
            <Link to="/about">
              <img src="../img/otp.png" />
            </Link>
          </Tooltip>
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
                <NotificationsRoundedIcon
                  className="icon"
                  style={{ padding: 10, fontSize: '2rem', color: '#e6c714' }}
                />
              </Badge>
            </IconButton>
          </Tooltip>
        </Boop>
      </Grid>
    </Container>
  );
}
