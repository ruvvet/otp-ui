import {
  Container,
  Grid
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import MatchButton from '../MatchButton';
import './matches.css';

export default function Matches() {
  const dispatch = useDispatch();

  const matches = useSelector((state: RootState) => state.match.matches);

  const renderMatches = () => {
    return matches.map((match, i) => (
      <MatchButton key={`match${i}`} match={match} />
    ));
  };

  return (
    <Container maxWidth="sm" className="matches-container scrollbar2">
      <Grid container direction="column" justify="center" alignItems="center" className="matches-grid">
        {renderMatches()}
      </Grid>
    </Container>
  );
}
