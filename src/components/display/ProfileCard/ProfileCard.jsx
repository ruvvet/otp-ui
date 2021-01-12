import { Box, Card, CardMedia, Grid, IconButton } from '@material-ui/core';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import UnfoldMoreRoundedIcon from '@material-ui/icons/UnfoldMoreRounded';
import { forwardRef, React, useState } from 'react';
import TinderCard from 'react-tinder-card';
import Slide from '../../effects/Slide';
import Details from '../Details';
import './profilecard.css';

export default forwardRef(
  ({ profile, swiped, outOfFrame, swipeButton }, ref) => {
    const [viewDetails, setViewDetails] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

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
        ref={ref}
      >
        <Card className="card">
          <div className="box-abs"></div>
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
                onClick={() => setIsVisible(!isVisible)}
              />

              <Slide isVisible={isVisible}>
                <Details />
              </Slide>
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
);
