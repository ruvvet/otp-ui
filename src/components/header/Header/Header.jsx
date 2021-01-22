import { Badge, Container, Grid, IconButton, Tooltip } from '@material-ui/core';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import ReplyRoundedIcon from '@material-ui/icons/ReplyRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Boop from '../../effects/Boop';
import './header.css';
import { useSelector } from 'react-redux';

export default function Header() {
  const location = useLocation();

  const [back, setBack] = useState();

  const matchNotification = useSelector(
    (state) => state.match.matchNotification
  );

  useEffect(() => {
    setBack(window.location.pathname === '/');
  }, [location]);

  return (
    <Container className="header-container" maxWidth="sm">
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Boop rotation={10} timing={150}>
          <Tooltip title={back ? 'Settings' : 'Main'} style={{ padding: 0 }}>
            <Link to={back ? '/settings' : '/'}>
              <IconButton>
                {back ? (
                  <SettingsRoundedIcon
                    className="icon"
                    style={{ padding: 10, fontSize: '2rem', color: '#dedede' }}
                  />
                ) : (
                  <ReplyRoundedIcon
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
                badgeContent={matchNotification}
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
