import React from 'react';
import {
  Avatar,
  Container,
  Grid,
  Paper,
  Typography,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Boop from '../effects/Boop';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="flex-start"
        wrap="nowrap"
        spacing={2}
      >
        <Grid item xs>
          <Typography variant="h2">Find your OTP - one true party.</Typography>
        </Grid>

        <Grid item xs>
          <Paper elevation={3}>
            <Typography variant="h3">
              You're not thirsty, you're just lonely.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs>

            <Typography variant="h7">
              Connect your Discord account. Set up your profile. Match with other Siegers. Chat and make new friends. Play Siege together!
            </Typography>
         
        </Grid>
        <Grid item xs style={{ width: '100%', textAlign: 'center' }}>
          <Paper elevation={3}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Typography variant="overline">Connect with me!</Typography>
              <Avatar src="https://pbs.twimg.com/profile_images/1012374148805550080/3DQR6ojs_400x400.jpg" />

              <Boop rotation={10} timing={150}>
                <Tooltip title="github.com/ruvvet" style={{ padding: 0 }}>
                  <IconButton href="https://github.com/ruvvet" target="_blank">
                    <GitHubIcon
                      className="icon"
                      style={{ padding: 12, fontSize: '2rem' }}
                    />
                  </IconButton>
                </Tooltip>
              </Boop>
              <Boop rotation={10} timing={150}>
                <Tooltip title="twitter.com/ruvvet" style={{ padding: 0 }}>
                  <IconButton href="https://twitter.com/ruvvet" target="_blank">
                    <TwitterIcon
                      className="icon"
                      style={{ padding: 12, fontSize: '2rem' }}
                    />
                  </IconButton>
                </Tooltip>
              </Boop>
              <Boop rotation={10} timing={150}>
                <Tooltip title="instagram.com/ruvvet" style={{ padding: 0 }}>
                  <IconButton
                    href="https://instagram.com/ruvvet"
                    target="_blank"
                  >
                    <InstagramIcon
                      className="icon"
                      style={{ padding: 12, fontSize: '2rem' }}
                    />
                  </IconButton>
                </Tooltip>
              </Boop>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Typography variant="caption">
            <Grid item xs>
              OTP is made with React, express, typeORM. <br />
              UI powered by <a href="https://material-ui.com/"> Material-UI</a>.
              <div>
                Icons by
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                >
                  Freepik
                </a>
                @
                <a href="https://www.flaticon.com/" title="Flaticon">
                  Flaticon.com
                </a>
              </div>
            </Grid>
            <Grid item xs>
              Not affiliated with Ubisoft. All product names, logos, and brands
              are property of their respective owners. All company, product and
              service names used in this website are for identification purposes
              only.
            </Grid>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
