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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  FormControlLabel,
  Checkbox,
  StepButton,
} from '@material-ui/core';
import React, { useState } from 'react';
import OTPRequest, { API } from '../../utils';
import './login.css';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

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
        <ListItemText primary primary={a.item} />
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
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography variant="body2">
                Please read the terms of service carefully before using the OTP
                web-app operated by ruvvet.com.
              </Typography>
              <Typography variant="h6">Conditions of use </Typography>
              <Typography variant="body2">
                By using this website, you certify that you have read and
                reviewed this Agreement and that you agree to comply with its
                terms. If you do not want to be bound by the terms of this
                Agreement, you are advised to leave the website accordingly. OTP
                only grants use and access of this website, its products, and
                its services to those who have accepted its terms.
              </Typography>
            </DialogContentText>
          </DialogContent>

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

// TODO: fix login button link
//TODO: add diaglog for TOS agreement
