import { Container, Grid } from '@material-ui/core';
import { React, useState } from 'react';
import Card from '../ProfileCard';
import './display.css';

const pretendProfiles = [
  {
    id: 1,
    name: 'rando 1',
    img:
      'https://i.pinimg.com/originals/2e/c6/b5/2ec6b5e14fe0cba0cb0aa5d2caeeccc6.jpg',
  },
  {
    id: 2,
    name: 'sweaty 2',
    img: 'https://wallpapercave.com/wp/wp5732553.jpg',
  },
  {
    id: 3,
    name: 'feeder 3',
    img:
      'https://p.favim.com/orig/2019/03/24/phone-wallpaper-backgrounds-phone-backgrounds-Favim.com-7029101.jpg',
  },
];

export default function Display() {
  const removed = [];

  const [profile, setProfile] = useState(pretendProfiles[0]);
  const [swipeDirection, setSwipeDirection] = useState();

  const swiped = (direction, profile) => {
    console.log('removing: ' + profile.name);
    setSwipeDirection(direction);
    removed.push(profile);
  };

  const outOfFrame = (profile) => {
    console.log(profile.name, ' out of frame, removed from list');
    pretendProfiles.shift();
    setProfile(pretendProfiles[0]);

  };

  const swipeButton = (direction) => {
    console.log('button - removing: ', profile.name);
    setSwipeDirection(direction);
    pretendProfiles.shift();
    setProfile(pretendProfiles[0]);
    removed.push(profile);
  };

  const renderCards = () => {
    return  <Card profile={profile} swiped={swiped} outOfFrame = {outOfFrame} swipeButton={swipeButton}/>
  };

  return (
    <Container className="card-container" maxWidth="sm">
      <Grid container direction="column" justify="center" alignItems="center">
        {renderCards()}
      </Grid>
    </Container>
  );
}
