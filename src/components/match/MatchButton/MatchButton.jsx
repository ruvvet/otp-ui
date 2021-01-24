import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { discordAvatar } from '../../../utils';
import './matchbutton.css';
import { att, def, ranks, socialMedia } from '../../../lookup';
import { Link } from 'react-router-dom';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';

export default function MatchButton({ match }) {
  const rankIcon = (userrank) => {
    return ranks.find((r) => r.rank === userrank).img;
  };

  const attIcon = (attacker) => {
    return att.find((op) => op.operator === attacker).img;
  };

  const defIcon = (defender) => {
    return def.find((op) => op.operator === defender).img;
  };

  return (
    <Paper
      elevation={0}
      style={{ width: '100%', margin: '10px 0', padding: '10px 10px' }}
    >
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className="match-button-container"
      >
        <Grid item xs={2}>
          <Avatar
            src={discordAvatar(
              match.liker.discordId,
              match.liker.discordAvatar
            )}
            className="matches-avatar"
            alt={match.liker.displayName || match.liker.discordUsername}
          />
        </Grid>

        <Grid item xs={3}>
          <Typography variant="h6">
            {match.liker.displayName || match.liker.discordUserName}
          </Typography>
          <Typography variant="caption">
            Matched: {new Date(match.time).toDateString()}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {match.liker.rank && <img src={rankIcon(match.liker.rank)} />}
          {match.liker.att && <img src={attIcon(match.liker.att)} /> }
          { match.liker.def && <img src={defIcon(match.liker.def)} />}
        </Grid>
        <Grid item xs={3}>
        <Tooltip title="Send a message!" style={{ padding: 0 }}>
            <Link to={`/messages/${match.liker.discordId}`}>
              <IconButton
                className="icon"
                // href={`/messages/${match.name}`}
              >
                <ChatRoundedIcon
                  className="icon"
                  color="primary"
                  style={{ padding: 0, fontSize: '2rem' }}
                />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Send Discord Friend Request!" style={{ padding: 0 }}>
            <IconButton
              className="icon"
              href={`https://discordapp.com/users/${match.liker.discordId}`}
              target="_blank"
            >
              <img
                style={{
                  height: 40,
                  width: 40,
                  padding: 5,
                  fontSize: '2rem',
                  color: '#dedede',
                  padding: 0
                }}
                src="./img/discord.png"
              />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Paper>
  );
}
