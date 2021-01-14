import {
  Box,
  Card,
  CardMedia,
  Grid,
  IconButton,
  MobileStepper
} from '@material-ui/core';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
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
                {isVisible
                  ? null
                  : `${profile.name.toUpperCase()}, rank lookup`}
              </div>
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
                  style={{ padding: 1, fontSize: '2rem', color: '#FA4659', backgroundColor:"transparent" }}
                  onClick={() => swipeButton('left')}
                />
              </IconButton>

              <IconButton>
                <UnfoldMoreRoundedIcon
                  className="icon"
                  style={{ padding: 5, fontSize: '3rem', color: '#20639B', backgroundColor:"transparent"}}
                  onClick={() => setIsVisible(!isVisible)}
                />
              </IconButton>
              <IconButton>
                <CheckCircleOutlineRoundedIcon
                  className="icon"
                  style={{ padding: 1, fontSize: '2rem', color: '#2EB872', backgroundColor:"transparent" }}
                  onClick={() => swipeButton('right')}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Card>
      </TinderCard>
    );
  }
);
