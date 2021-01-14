import { Container, Grid, IconButton, Badge, Tooltip } from '@material-ui/core';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import React from 'react';
import './footer.css';
import Boop from '../../effects/Boop';
import { Link } from 'react-router-dom';

export default function Footer() {
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
            <IconButton>
              <FavoriteRoundedIcon
                className="icon"
                style={{ padding: 12, fontSize: '3rem', color: '#cf0773' }}
              />
            </IconButton>
          </Tooltip>
        </Boop>
        <Boop rotation={10} timing={150}>
          <Tooltip title="Profile" style={{ padding: 0 }}>
          <Link to="/profile">
            <IconButton>
              <PersonRoundedIcon
                className="icon"
                style={{ padding: 10, fontSize: '2rem', color: '#b093ff' }}
              />
            </IconButton>
            </Link>
          </Tooltip>
        </Boop>
      </Grid>
    </Container>
  );
}
