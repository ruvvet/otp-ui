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
import { MatchResponse } from '../../../interfaces';

interface MatchProps {
  match: MatchResponse;
}

export default function MatchButton({ match }: MatchProps) {
  const renderRankIcon = (userrank: string) => {
    const rankIcon = ranks.find((r) => r.rank === userrank);
    return rankIcon ? <img src={rankIcon.img} /> : null;
  };

  const renderAttIcon = (attacker: string) => {
    const attIcon = att.find((op) => op.operator === attacker);
    return attIcon ? <img src={attIcon.img} /> : null;
  };

  const renderDefIcon = (defender: string) => {
    const defIcon = def.find((op) => op.operator === defender);
    return defIcon ? <img src={defIcon.img} /> : null;
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
            {match.liker.displayName || match.liker.discordUsername}
          </Typography>
          <Typography variant="caption">
            Matched: {new Date(match.time).toDateString()}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {renderRankIcon(match.liker.rank)}
          {renderAttIcon(match.liker.att)}
          {renderDefIcon(match.liker.def)}
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
                  fontSize: '2rem',
                  color: '#dedede',
                  padding: 0,
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
