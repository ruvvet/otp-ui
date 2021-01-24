import React from 'react';
import {
  Avatar,
  Container,
  Grid,
  Paper,
  Typography,
  IconButton,
  Tooltip,
  Link,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import BugReportRoundedIcon from '@material-ui/icons/BugReportRounded';
import Boop from '../effects/Boop';

export default function About() {
  return (
    <Container className="about-container" maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="flex-start"
        wrap="nowrap"
        spacing={3}
        className="about-container-grid"
      >
        <Grid item xs>
          <Typography variant="h2">Find your OTP - one true party.</Typography>
        </Grid>

        <Grid item xs>
          <Paper elevation={3} style={{ padding: 10 }}>
            <Typography variant="h3">
              You're not thirsty, you're just lonely.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Typography variant="h6">
            Login with Discord. Set up your profile. Match with other Siegers.
            Make new friends. Play Siege together. Have fun!
          </Typography>
        </Grid>
        <Grid item xs style={{ width: '100%', textAlign: 'center' }}>
          <Paper elevation={3}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={6}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Avatar src="https://pbs.twimg.com/profile_images/1012374148805550080/3DQR6ojs_400x400.jpg" />
                  <Typography
                    variant="caption"
                    style={{ padding: '0 0 0 10px' }}
                  >
                    Connect w/ Me!
                  </Typography>
                </Grid>
              </Grid>

              <Boop rotation={10} timing={150}>
                <Tooltip title="github.com/ruvvet" style={{ padding: 0 }}>
                  <IconButton href="https://github.com/ruvvet" target="_blank">
                    <GitHubIcon
                      className="icon github"
                      style={{ padding: 12, fontSize: '2rem' }}
                    />
                  </IconButton>
                </Tooltip>
              </Boop>
              <Boop rotation={10} timing={150}>
                <Tooltip title="twitter.com/ruvvet" style={{ padding: 0 }}>
                  <IconButton href="https://twitter.com/ruvvet" target="_blank">
                    <TwitterIcon
                      className="icon twitter"
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
                      className="icon instagram"
                      style={{ padding: 12, fontSize: '2rem' }}
                    />
                  </IconButton>
                </Tooltip>
              </Boop>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs style={{ margin: '20% 0 0 0' }}>

            <Boop rotation={10} timing={150}>
              <Tooltip title="Report a bug!" style={{ padding: 0 }}>
                <IconButton
                  href="https://twitter.com/intent/tweet?text=%40Ruvvet%20OTP%20%20%F0%9F%90%9B%20report%3A%20"
                  target="_blank"
                >
                  <BugReportRoundedIcon
                    className="icon"
                    style={{ padding: 12, fontSize: '2rem' }}
                  />
                </IconButton>
              </Tooltip>
            </Boop>

          <Typography variant="caption">
            <Grid item xs>
              OTP is made with React, Express, and TypeORM. <br />
              UI designed with Material-UI. <br />
              Icons by Freepik, Pixel-perfect from
              <Link
                href="https://www.flaticon.com/"
                target="_blank"
                title="Flaticon"
              >
                Flaticon.com
              </Link>
            </Grid>
            <Grid item xs>
              Not affiliated with Ubisoft, Tom Clancy, or Rainbow Six Siege. All
              product names, logos, and brands are property of their respective
              owners. All company, product and service names used in this
              website are for identification purposes only.
            </Grid>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
