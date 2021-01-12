import { Container, Grid } from '@material-ui/core';
import { createRef, React, useMemo, useState } from 'react';
import ProfileCard from '../ProfileCard';
import './display.css';

const pretendProfiles = [
  {
    id: 1,
    name: 'rando 1',
    img:
      'https://specials-images.forbesimg.com/imageserve/5f5f55887d9eec237a586841/960x0.jpg',
  },
  {
    id: 2,
    name: 'sweaty 2',
    img:
      'https://boundingintocomics.com/wp-content/uploads/2019/10/2019.10.25-05.14-boundingintocomics-5db32d840ef42.png',
  },
  {
    id: 3,
    name: 'feeder 3',
    img: 'https://a.espncdn.com/photo/2018/0917/r432464_1600x800cc.jpg',
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
    console.log('removing: ' + id);
    setSwipeDirection(direction);
    removed.push(profile.id);
  };

  const outOfFrame = (id) => {
    console.log(id, ' out of frame, removed from list');
    profiles = profiles.filter((profile) => profile.id !== id);
    console.log(profiles);
    setProfile(profiles);
  };

  const swipeButton = (direction) => {
    const remaining = profile.filter((pro) => !removed.includes(pro.id));
    console.log('remaining', remaining);
    if (remaining.length) {
      const toRemove = remaining[remaining.length - 1].id;
      const index = pretendProfiles.map((pro) => pro.id).indexOf(toRemove);
      removed.push(toRemove);
      childRefs[index].current.swipe(direction);
    }
  };

  const renderCards = () => {
    return pretendProfiles.map((profile, i) => (
      <div className="swipe">
        <ProfileCard
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
