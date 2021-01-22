import {
    Avatar,
    Badge,
    Grid,
    IconButton,
    Paper,
    Tooltip
} from '@material-ui/core';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import React from 'react';
import { Link } from 'react-router-dom';
import './chatbutton.css';
import {discordAvatar} from '../../../utils'

export default function ChatButton({ chatBuddy }) {

  return (
    <Paper elevation={0} className="message-match">
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs>
        <Badge
          className="online-badge"
          badgeContent={100}
          color="primary"
          className="badge"
          variant="dot"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          overlap="circle"
          invisible={false}
        >
          <Avatar alt={chatBuddy.receiver_displayName || chatBuddy.receiver_discordUsername} src={discordAvatar(chatBuddy.receiver_discordId, chatBuddy.receiver_discordAvatar)} />
        </Badge>
      </Grid>
      <Grid item xs>
        {chatBuddy.receiver_displayName || chatBuddy.receiver_discordUsername}
      </Grid>
      <Grid item xs>
        <Tooltip title="Send a message!" style={{ padding: 0 }}>
          <Link to={`/messages/${chatBuddy.receiver_discordId}`}>
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
        <Tooltip
          title="Send Discord Friend Request!"
          style={{ padding: 0 }}
        >
          <IconButton
            className="icon"
            href={`https://discordapp.com/users/${chatBuddy.receiver_discordId}`}
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
