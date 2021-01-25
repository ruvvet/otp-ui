import {
  Avatar,
  Badge,
  Grid,
  IconButton,
  Paper,
  Tooltip,
} from '@material-ui/core';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import React from 'react';
import { Link } from 'react-router-dom';
import './chatbutton.css';
import { discordAvatar } from '../../../utils';
import { useSelector } from 'react-redux';
import { ChatResponse } from '../../../interfaces';
import { RootState } from '../../../store';

interface ChatButtonProps {
  chatBuddy: ChatResponse;
}

export default function ChatButton({ chatBuddy }: ChatButtonProps) {
  const online = useSelector((state: RootState) =>
    state.chat.onlineChats.some((id) => chatBuddy.discordId === id)
  );

  return (
    <Paper elevation={0} className="message-match">
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs>
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
        </Grid>
        <Grid item xs>
          {chatBuddy.displayName || chatBuddy.discordUsername}
        </Grid>
        <Grid item xs>
          <Tooltip title="Send a message!" style={{ padding: 0 }}>
            <Link to={`/messages/${chatBuddy.discordId}`}>
              <IconButton
                className="icon"
                // href={`/messages/${match.name}`}
              >
                <ChatRoundedIcon
                  className="icon"
                  color="primary"
                  style={{ padding: 5, fontSize: '2rem' }}
                />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Send Discord Friend Request!" style={{ padding: 0 }}>
            <IconButton
              className="icon"
              href={`https://discordapp.com/users/${chatBuddy.discordId}`}
              target="_blank"
            >
              <img
                style={{
                  height: 30,
                  width: 30,
                  padding: 5,
                  fontSize: '2rem',
                  color: '#dedede',
                }}
                src="./img/discord.png"
              />
            </IconButton>
          </Tooltip>

          {/* <Chip
        icon={
          <img style={{ height: 20, width: 20 }} src="./img/discord.png" />
        }
        label="Send"
        clickable
        color="primary"
        onClick={() =>
          window.open(`https://discordapp.com/users/${match.id}`)
        }
      /> */}
        </Grid>
      </Grid>
    </Paper>
  );
}
