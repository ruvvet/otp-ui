import {
  Box,
  Card,
  CardMedia,
  Grid,
  IconButton,
  MobileStepper,
} from '@material-ui/core';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import UnfoldMoreRoundedIcon from '@material-ui/icons/UnfoldMoreRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import { React, useState } from 'react';
import TinderCard from 'react-tinder-card';
import Details from '../../display/Details';
import Slide from '../../effects/Slide';
import './profile.css';
import { useSelector } from 'react-redux';

export default function Profile() {

  const displayName = useSelector((state) => state.profile.displayName);

  const [viewDetails, setViewDetails] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  //TODO: click away, setViewDetails = false;

  const handleNext = () => {
    setCurrentImgIndex(currentImgIndex + 1);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setCurrentImgIndex(currentImgIndex - 1);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const profile = {
    id: 1,
    name: 'rando 1',
    img: [
      'https://specials-images.forbesimg.com/imageserve/5f5f55887d9eec237a586841/960x0.jpg',
      'https://www.tubefilter.com/wp-content/uploads/2020/11/pokimane-twitch-donations-cap-streamlabs.jpg',
      'https://cdn1.dotesports.com/wp-content/uploads/2020/09/14075123/pokimane-vtuber-1024x575.jpg',
    ],
  };

  return (
    <TinderCard
      className="profile-card"
      id="profile-card"
      preventSwipe={['up', 'down', 'left', 'right']}
    >
      <Card className="card">
        <MobileStepper
          className="profile-stepper"
          variant="dots"
          steps={3}
          position="static"
          activeStep={activeStep}
          nextButton={
            <IconButton>
              <ArrowRightRoundedIcon
                className="icon"
                fontSize="large"
                onClick={handleNext}
                disabled={activeStep === 3}
              />
            </IconButton>
          }
          backButton={
            <IconButton>
              <ArrowLeftRoundedIcon
                className="icon"
                fontSize="large"
                onClick={handleBack}
                disabled={activeStep === 0}
              />
            </IconButton>
          }
        />
        <CardMedia
          className="profile-img"
          component="img"
          image={profile.img[currentImgIndex]}
        />
        <Grid container direction="columns" className="content">
          <Slide isVisible={isVisible}>
            <Details profile={profile} />
          </Slide>

          <Box className="title">
            <div>
              {isVisible || (
                <>
                  <div><StarBorderRoundedIcon/>Profile Preview</div>
                  <div>{displayName}, rank lookup</div>
                </>
              )}
            </div>
          </Box>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="buttons"
          >
            <IconButton>
              <UnfoldMoreRoundedIcon
                className="icon"
                style={{
                  padding: 5,
                  fontSize: '3rem',
                  color: '#20639B',
                  backgroundColor: 'transparent',
                }}
                onClick={() => setIsVisible(!isVisible)}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </TinderCard>
  );
}
