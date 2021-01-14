import { Container, Grid, IconButton, Badge, Tooltip } from '@material-ui/core';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import React from 'react';
import './footer.css';
import Boop from '../../effects/Boop';

export default function Footer() {
  return (
    <Container className="footer-container" maxWidth="sm">
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Boop rotation={10} timing={150}>
          <Tooltip title="Chat" style={{ padding: 0 }}>
            <IconButton>
              <Badge
                badgeContent={100}
                color="primary"
                className="badge"
                showZero
                max={99}
                overlap="circle"
              >
                <ChatBubbleRoundedIcon className="icon" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Boop>
        <Boop rotation={10} timing={150}>
          <Tooltip title="Matches" style={{ padding: 0 }}>
            <IconButton>
              <FavoriteRoundedIcon className="icon" />
            </IconButton>
          </Tooltip>
        </Boop>
        <Boop rotation={10} timing={150}>
          <Tooltip title="Profile" style={{ padding: 0 }}>
            <IconButton>
              <PersonRoundedIcon
                className="icon"
                style={{ color: '#FFFFFF', fontSize: 'large' }}
              />
            </IconButton>
          </Tooltip>
        </Boop>
      </Grid>
    </Container>
  );
}
