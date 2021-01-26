import {
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { ChatResponse } from '../../../interfaces';
import { RootState } from '../../../store';
import { discordAvatar } from '../../../utils';
import './chatbutton.css';

interface ChatButtonProps {
  chatBuddy: ChatResponse;
}

export default function ChatButton({ chatBuddy }: ChatButtonProps) {
  const online = useSelector((state: RootState) =>
    state.chat.onlineChats.some((id) => chatBuddy.discordId === id)
  );

  return (
    <Button style={{ width: '80%' }} href={`/messages/${chatBuddy.discordId}`}>
      <Paper
        elevation={0}
        className="message-match"
        style={{ padding: '20px 0' }}
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Badge
            badgeContent={100}
            color="primary"
            className="badge"
            variant="dot"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            overlap="circle"
            invisible={!online}
          >
            <Avatar
              alt={chatBuddy.displayName || chatBuddy.discordUsername}
              src={discordAvatar(chatBuddy.discordId, chatBuddy.discordAvatar)}
            />
          </Badge>
          <Box style={{ padding: '0 20px' }}>
            <Typography variant="h5">
              {chatBuddy.displayName || chatBuddy.discordUsername}
            </Typography>
          </Box>
        </Grid>
      </Paper>
    </Button>
  );
}
