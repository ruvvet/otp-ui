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
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import Details from '../../display/Details';
import Slide from '../../effects/Slide';
import './profile.css';
import { useSelector } from 'react-redux';
import { ranks, att, def } from '../../../lookup';

export default function Profile() {
  const displayName = useSelector((state) => state.profile.displayName);
  const rank = useSelector((state) => state.profile.rank);
  const pics = useSelector((state) => state.profile.pics);
  const socials = useSelector((state) => state.profile.socials);
  const mainAtt = useSelector((state) => state.profile.mainAtt);
  const mainDef = useSelector((state) => state.profile.mainDef);

  const [viewDetails, setViewDetails] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [rankIcon, setRankIcon] = useState('');
  const [attIcon, setAttIcon] = useState('');
  const [defIcon, setDefIcon] = useState('');

  //TODO: click away, setViewDetails = false;

  useEffect(() => {
    const rankIcon = ranks.find((r) => r.rank === rank);
    setRankIcon(rankIcon ? rankIcon.img : '');

    const attMain = att.find((op) => op.operator === mainAtt);
    setAttIcon(attMain ? attMain.img : '');

    const defMain = def.find((op) => op.operator === mainDef);
    setDefIcon(defMain ? defMain.img : '');
  }, []);

  const handleNext = () => {
    setCurrentImgIndex(currentImgIndex + 1);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setCurrentImgIndex(currentImgIndex - 1);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const numPics = Object.values(pics).filter(Boolean).length;

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
          steps={numPics}
          position="static"
          activeStep={activeStep}
          nextButton={
            <IconButton
              onClick={handleNext}
              disabled={activeStep === numPics - 1}
            >
              <ArrowRightRoundedIcon className="icon" fontSize="large" />
            </IconButton>
          }
          backButton={
            <IconButton onClick={handleBack} disabled={activeStep === 0}>
              <ArrowLeftRoundedIcon className="icon" fontSize="large" />
            </IconButton>
          }
        />
        <CardMedia
          className="profile-img"
          component="img"
          image={Object.values(pics)[currentImgIndex]}
        />
        <Grid container direction="columns" className="content">
          <Slide isVisible={isVisible}>
            <Details
            name={displayName}
                rank={rank}
                socials={socials}
                rankIcon={rankIcon}
                attIcon={attIcon}
                defIcon={defIcon}/>
          </Slide>

          <Box className="title">
            <div>
              {isVisible || (
                <>
                  <>
                    <img className="rank-profile-icon" src={rankIcon} />
                    {displayName.toUpperCase()}, {rank}
                    {/* <div>
                    <StarBorderRoundedIcon />
                    Profile Preview
                  </div> */}
                  </>
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
