import { Container, Grid, IconButton, Badge } from '@material-ui/core';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <Container className="footer-container" maxWidth="sm">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
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
        <IconButton>
          <FavoriteRoundedIcon className="icon" />
        </IconButton>
        <IconButton>
          <PersonRoundedIcon
            className="icon"
            style={{ color: '#FFFFFF', fontSize: 'large' }}
          />
        </IconButton>
      </Grid>
    </Container>
  );
}
