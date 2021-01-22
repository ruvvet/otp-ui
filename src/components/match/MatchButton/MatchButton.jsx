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
          />
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h6">
            {match.liker.displayName || match.liker.discordUserName}
          </Typography>
          <Typography variant="caption">
            Matched: {new Date(match.time).toDateString()}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img src={rankIcon(match.liker.rank)} />
          <img src={attIcon(match.liker.att)} />
          <img src={defIcon(match.liker.def)} />
        </Grid>
        <Grid item xs={2}>
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
