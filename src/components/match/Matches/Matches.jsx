import {
  Container,
  Grid
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MatchButton from '../MatchButton';
import './matches.css';

export default function Matches() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const matches = useSelector((state) => state.match.matches);

  const renderMatches = () => {
    return matches.map((match, i) => (
      <MatchButton key={`match${i}`} match={match} />
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
