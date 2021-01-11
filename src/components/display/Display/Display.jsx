import { Container, Grid } from '@material-ui/core';
import { createRef, React, useMemo, useState } from 'react';
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
  let profiles = pretendProfiles;

  const [profile, setProfile] = useState(pretendProfiles);
  const [swipeDirection, setSwipeDirection] = useState();

  const childRefs = useMemo(
    () =>
      Array(pretendProfiles.length)
        .fill(0)
        .map((i) => createRef()),
    []
  );

  const swiped = (direction, id) => {
    console.log('removing: ' + profile.name);
    setSwipeDirection(direction);
    removed.push(profile.id);
  };

  const outOfFrame = (id) => {
    console.log(profile.name, ' out of frame, removed from list');
    profiles = profiles.filter((profile) => profile.id !== id);
    setProfile(profiles);
  };

  const swipeButton = (direction) => {
    const remaining = profile.filter((pro) => !removed.includes(pro.id));
    if (remaining.length) {
      const toRemove = remaining[remaining.length - 1].id;
      const index = pretendProfiles.map((pro) => pro.id).indexOf(toRemove);
      removed.push(toRemove);
      childRefs[index].current.swipeButton(direction);
    }
  };

  const renderCards = () => {
    return pretendProfiles.map((profile, i) => (
<div className = "swipe">
        <Card
          ref={childRefs[i]}
          key={i}
          profile={profile}
          swiped={swiped}
          outOfFrame={outOfFrame}
          swipeButton={swipeButton}
        />
</div>
    ));
  };

  return (
    <Container className="card-container" maxWidth="sm">
      <Grid container direction="column" justify="center" alignItems="center">
        {renderCards()}
      </Grid>
    </Container>
  );
}
