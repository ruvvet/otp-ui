import React, { useState, useEffect } from 'react';
import './matches.css';
import {
  Container,
  Grid,
  Avatar,
  Paper,
  Typography,
  Box,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import OTPRequest from '../../../utils';

export default function Matches() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const getMatches = async () => {
      const response = await OTPRequest('/swipe/matches', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => {
        setError(true);
        return null;
      });

      if (response) {
        console.log(response);
        setMatches(response);
        setLoading(false);
      }
    };

    getMatches();
  }, []);

  const renderMatches = () => {
    return matches.map((match, i) => (
      <Paper
        elevation={0}
        style={{ width: '100%', margin: '10px 0', padding: '10px 0' }}
      >
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Avatar
            src={`https://cdn.discordapp.com/avatars/${match.liker.discordId}/${match.liker.discordAvatar}.png`}
            className="matches-avatar"
          />

          <Box>
            <Typography variant="h6">
              {match.liker.displayName || match.liker.discordUserName}
            </Typography>
          </Box>
          <Tooltip title="Send Discord Friend Request!" style={{ padding: 0 }}>
            <IconButton
              className="icon"
              href={`https://discordapp.com/users/${match.id}`}
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
      </Paper>
    ));
  };

  return (
    <Container maxWidth="sm" className="matches-container scrollbar2">
      <Grid container direction="column" justify="center" alignItems="center">
        {renderMatches()}
      </Grid>
    </Container>
  );
}

//TODO: fix potential overflow issues
