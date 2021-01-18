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
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import UnfoldMoreRoundedIcon from '@material-ui/icons/UnfoldMoreRounded';
import React, { forwardRef, useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import Slide from '../../effects/Slide';
import Details from '../Details';
import './profilecard.css';
import { ranks, att, def, socialMedia } from '../../../lookup';
import { setSocials } from '../../../store/profileSlice';
import { checkPropTypes } from 'prop-types';

export default forwardRef(
  ({ profile, swiped, outOfFrame, swipeButton }, ref) => {
    const [viewDetails, setViewDetails] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [rankIcon, setRankIcon] = useState('');

    const [attIcon, setAttIcon] = useState('');
    const [defIcon, setDefIcon] = useState('');
    const [pics, setPics] = useState([]);
    const [socials, setSocials] = useState([]);

    useEffect(() => {
      const rankIcon = ranks.find((r) => r.rank === profile.rank);
      setRankIcon(rankIcon ? rankIcon.img : '');

      const attMain = att.find((op) => op.operator === profile.att);
      setAttIcon(attMain ? attMain.img : '');

      const defMain = def.find((op) => op.operator === profile.def);
      setDefIcon(defMain ? defMain.img : '');

      setPics(profile.pictures.map((pic, i) => pic.url));

      setSocials(
        //     socialMedia.reduce((final, s) => {
        //       if (profile[s.site]) {
        //         final[s.site] = profile[s.site];
        //       }
        //       return final;
        //     }),
        //     {}
        //   );
        // }, {}
        {
          twitch: profile.twitch || '',
          twitter: profile.twitter || '',
          instagram: profile.instagram || '',
          snapchat: profile.snapchat || '',
          tiktok: profile.tiktok || '',
          spotify: profile.spotify || '',
          facebook: profile.facebook || '',
          reddit: profile.reddit || '',
        }
      );
    });

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
        onSwipe={(dir) => swiped(dir, profile.discordId)}
        onCardLeftScreen={() => outOfFrame(profile.discordId)}
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
              <IconButton
                onClick={handleNext}
                disabled={activeStep === pics.length - 1}
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
            image={pics[currentImgIndex]}
          />
          <Grid container direction="columns" className="content">
            <Slide isVisible={isVisible}>
              <Details
                name={profile.displayName || profile.discordUserName}
                rank={profile.rank}
                socials={socials}
                rankIcon={rankIcon}
                attIcon={attIcon}
                defIcon={defIcon}
              />
            </Slide>

            <Box className="title">
              <div>
                {isVisible || (
                  <>
                    <img className="rank-profile-icon" src={rankIcon} />
                    {profile.displayName.toUpperCase()}, {profile.rank}
                  </>
                )}
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
                  style={{
                    padding: 1,
                    fontSize: '2rem',
                    color: '#FA4659',
                    backgroundColor: 'transparent',
                  }}
                  onClick={() => swipeButton('left')}
                />
              </IconButton>

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
              <IconButton>
                <CheckCircleOutlineRoundedIcon
                  className="icon"
                  style={{
                    padding: 1,
                    fontSize: '2rem',
                    color: '#2EB872',
                    backgroundColor: 'transparent',
                  }}
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
