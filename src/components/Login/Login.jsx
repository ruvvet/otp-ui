import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { API } from '../../utils';
import './login.css';

export default function Login() {
  const actions = [
    { item: 'Login w/ Discord', icon: './img/discord (1).png' },
    { item: 'Create your Profile', icon: './img/profile-user.png' },
    { item: 'Connect w/ Siege Players', icon: './img/like.png' },
    { item: 'Make Friends, Have Fun', icon: './img/high-five.png' },
  ];

  const generate = () => {
    return actions.map((a, i) => (
      <ListItem>
        <ListItemIcon>
          <img src={a.icon} />
        </ListItemIcon>
        <ListItemText primary primary={a.item} />
      </ListItem>
    ));
  };

  return (
    <Container className="login-container" maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Button
          variant="contained"
          className="login-btn"
          startIcon={
            <img
              className="logo"
              src="./img/otp.png"
              style={{ height: 50, width: 50 }}
            />
          }
          href={`${API}/authorize`}
          style={{ backgroundColor: '#FFFFFF50' }}
          fullWidth
        />
        <Grid item xs>
          <Typography variant="h4">FInd your one true party.</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="subtitle1">
            You're not thirsty, you're just lonely.
          </Typography>
        </Grid>
        <Grid item xs>
          <Paper elevation={3}>
            <List>{generate()}</List>
          </Paper>
          </Grid>
        <Grid item xs className="login-disclaimer">
        <Typography variant="caption" >
          Not affiliated with Ubisoft. All product names, logos, and brands are
          property of their respective owners. All company, product and service
          names used in this website are for identification purposes only.
        </Typography>
        </Grid>
      </Grid>


    </Container>
  );
}

// TODO: fix login button link
