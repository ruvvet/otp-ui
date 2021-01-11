import {
  Box,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Drawer,
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import UnfoldMoreRoundedIcon from '@material-ui/icons/UnfoldMoreRounded';
import { React, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './profilecard.css';

export default function ProfileCard({
  profile,
  swiped,
  outOfFrame,
  swipeButton,
}) {

  const [viewDetails, setViewDetails] = useState(false);

  const toggleDetails = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setViewDetails(open);
  };

  return (
    <TinderCard
      className="profile-card"
      id="profile-card"
      onSwipe={(dir) => swiped(dir, profile.id)}
      onCardLeftScreen={() => outOfFrame(profile.id)}
      preventSwipe={['up', 'down']}
    >
      <Card className="card">
        <CardMedia
          className="profile-img"
          component="img"
          image={profile.img}
          title="something"
        />

        <Box py={3} px={2} className="content">
          <div>{profile.name}, rank</div>
        </Box>

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className="buttons"
        >
          <IconButton>
            <HighlightOffRoundedIcon
              className="icon"
              style={{ color: '#FFFFFF', fontSize: 40 }}
              onClick={() => swipeButton('left')}
            />
          </IconButton>

          <IconButton>
            <UnfoldMoreRoundedIcon
              className="icon"
              style={{ color: '#FFFFFF', fontSize: 40 }}
              onClick={toggleDetails(true)}
            />

            <Drawer
              anchor={'bottom'}
              open={viewDetails}
              onClose={toggleDetails(false)}
              className="drawer"
              // PaperProps={{ style: { position: 'absolute' } }}
              // BackdropProps={{ style: { position: 'absolute' } }}
              // ModalProps={{
              //   container: document.getElementById('profile-card'),
              //   style: { position: 'absolute' },
              // }}
            >
              <div>Role</div>
              <div>Mains</div>
              <div>Link to other social media</div>
              <div>Blurb</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                odio euismod lacinia at quis risus. Bibendum neque egestas
                congue quisque egestas diam. Feugiat in ante metus dictum at
                tempor. Tellus in metus vulputate eu scelerisque felis
                imperdiet. Cursus turpis massa tincidunt dui ut ornare lectus.
              </div>
            </Drawer>
          </IconButton>
          <IconButton>
            <CheckCircleOutlineRoundedIcon
              className="icon"
              style={{ color: '#FFFFFF', fontSize: 40 }}
              onClick={() => swipeButton('right')}
            />
          </IconButton>
        </Grid>
      </Card>
    </TinderCard>
  );
}
