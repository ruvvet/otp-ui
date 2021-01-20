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

  const fakeMatches = [
    {
      id: 1,
      liker: {
        discordId: 1,
        discordUserName: 'discordname1',
        discordAvatar:
          'https://png.pngtree.com/png-vector/20200221/ourmid/pngtree-cute-bunny-playing-with-a-butterfly-png-image_2151384.jpg',
        displayName: 'person1',
        rank: 'Silver 1',
        att: 'Dokkaebi',
        def: 'Cav',
      },
    },
    {
      id: 2,
      liker: {
        discordId: 2,
        discordUserName: 'discordname2',
        discordAvatar:
          'https://png.pngtree.com/png-vector/20200221/ourmid/pngtree-cute-bunny-playing-with-a-butterfly-png-image_2151384.jpg',
        displayName: 'person2',
        rank: 'Silver 2',
        att: 'Dokkaebi',
        def: 'Cav',
      },
    },
    {
      id: 3,
      liker: {
        discordId: 3,
        discordUserName: 'discordname3',
        discordAvatar:
          'https://png.pngtree.com/png-vector/20200221/ourmid/pngtree-cute-bunny-playing-with-a-butterfly-png-image_2151384.jpg',
        displayName: 'person3',
        rank: 'Silver 1',
        att: 'Dokkaebi',
        def: 'Cav',
      },
    },
    {
      id: 4,
      liker: {
        discordId: '101217049287622656',
        discordUserName: 'discordname4',
        discordAvatar:
          'aa53cd07c91f33c6246555654d08eac8',
        displayName: 'person1',
        rank: 'Silver 4',
        att: 'Dokkaebi',
        def: 'Cav',
      },
    },
  ];

  const renderMatches = () => {
    return matches.map((match, i) => (
      <Paper style={{ width: '100%', margin: '10px 0', padding: "20px 0" }}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="items"
        >
          <Avatar
            src={`https://cdn.discordapp.com/avatars/${match.liker.discordId}/${match.liker.discordAvatar}.png`}
          />

          <Box>
            <Typography variant="button">
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
        </Grid>
      </Paper>
    ));
  };

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" justify="center" alignItems="center">
        {renderMatches()}
      </Grid>
    </Container>
  );
}


//TODO: fix potential overflow issues

