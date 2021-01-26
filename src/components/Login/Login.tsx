import {
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import React, { useState } from 'react';
import { API } from '../../utils';
import Disclaimer from '../disclaimer/Disclaimer';

import './login.css';

export default function Login() {
  const [dialog, setDialog] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

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
        <ListItemText primary={a.item} />
      </ListItem>
    ));
  };

  const handleDialogOpen = () => {
    setDialog(true);
  };

  const handleDialogClose = () => {
    setDialog(false);
  };

  const handleAccept = () => {
    window.location.href = `${API}/authorize`;
  };

  return (
    <Container className="login-container" maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        style={{ height: '50%' }}
      >
        <Grid item xs>
          <Typography variant="h4">FInd your one true party.</Typography>

          <Typography variant="subtitle1">
            You're not thirsty, you're just lonely.
          </Typography>
        </Grid>
        <Grid item xs style={{ width: '100%' }}>
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
            onClick={handleDialogOpen}
            style={{ backgroundColor: '#FFFFFF50' }}
            fullWidth
          />
          <Dialog
            open={dialog}
            onClose={handleDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Disclaimer />

            <DialogActions>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    // onChange={(e) => handleAccept()}
                    onChange={(e) =>
                      setDisableButton(disableButton ? false : true)
                    }
                  />
                }
                label="I accept and agree to the Terms of Use"
              />
              <Button
                variant="contained"
                color="secondary"
                autoFocus
                disabled={disableButton}
                href={`${API}/authorize`}
              >
                Login
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>

        {/*
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
        /> */}

        <Grid item xs>
          <Paper elevation={3}>
            <List>{generate()}</List>
          </Paper>
        </Grid>
        <Grid item xs className="login-disclaimer">
          <Typography variant="caption">
            Not affiliated with Ubisoft. All product names, logos, and brands
            are property of their respective owners. All company, product and
            service names used in this website are for identification purposes
            only.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

//todo: fix TOS
