import { Badge, Container, Grid, IconButton, Tooltip } from '@material-ui/core';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ReplyAllRoundedIcon from '@material-ui/icons/ReplyAllRounded';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Boop from '../../effects/Boop';
import './footer.css';

export default function Footer() {
  const location = useLocation();

  const [logout, setLogout] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLogout(location.pathname === '/profile');
  }, [location]);

  return (
    <Container className="footer-container" maxWidth="sm">
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Boop rotation={10} timing={150}>
          <Tooltip title="Chat" style={{ padding: 0 }}>
            <Link to="/messages">
              <IconButton>
                <Badge
                  badgeContent={100}
                  color="primary"
                  className="badge"
                  showZero
                  max={99}
                  overlap="circle"
                >
                  <ChatBubbleRoundedIcon
                    className="icon"
                    style={{ padding: 10, fontSize: '2rem', color: '#60d3d3' }}
                  />
                </Badge>
              </IconButton>
            </Link>
          </Tooltip>
        </Boop>
        <Boop rotation={10} timing={150}>
          <Tooltip title="Matches" style={{ padding: 0 }}>
            <Link to="/matches">
            <IconButton>
              <FavoriteRoundedIcon
                className="icon"
                style={{ padding: 12, fontSize: '3rem', color: '#cf0773' }}
              />
            </IconButton>
            </Link>
          </Tooltip>
        </Boop>
        <Boop rotation={10} timing={150}>
          <Tooltip title={logout ? 'Logout' : 'Profile'} style={{ padding: 0 }}>
            <Link to={logout ? '/logout' : '/profile'}>
              <IconButton>
                {logout ? (
                  <ReplyAllRoundedIcon
                    className="icon"
                    style={{
                      padding: 10,
                      fontSize: '2rem',
                      color: '#b093ff',
                      transform: 'rotate(180deg)',
                    }}
                  />
                ) : (
                  <PersonRoundedIcon
                    className="icon"
                    style={{ padding: 10, fontSize: '2rem', color: '#b093ff' }}
                  />
                )}
              </IconButton>
            </Link>
          </Tooltip>
        </Boop>
      </Grid>
    </Container>
  );
}
