import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import './login.css';
import { API } from '../../utils';

export default function Login() {
  const toHex = (d) => {
    const hex = ('0' + Number(d).toString(16)).slice(-2).toUpperCase();
    return hex;
  };

  const date = new Date();
  const s = parseInt((date.getSeconds() * 255) / 59);
  const m = parseInt((date.getMinutes() * 255) / 59);
  const h = parseInt((date.getHours() * 255) / 23);
  const color = `${toHex(h)}${toHex(m)}${toHex(s)}`;

  return (
    <Container className="login-container" maxWidth="sm">
      <Grid container direction="column" justify="center" alignItems="center">
        <Button
          variant="contained"
          className="login-btn"
          startIcon={<img src="./img/otp.png" />}
          href={`${API}/authorize`}
          style={{ backgroundColor: `#${color}` }}
          fullWidth
        />
      </Grid>
    </Container>
  );
}

// TODO: fix login button link
