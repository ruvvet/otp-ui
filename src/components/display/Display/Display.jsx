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
  const [profiles, setProfiles] = useState(pretendProfiles);
  const [index, setIndex] = useState(0);

  const childRefs = useMemo(
    () =>
      // Array(profiles.length)
      //   .fill(0)
      //   .map((i) => createRef()),
      ({ 1: createRef(), 2: createRef(), 3: createRef() }),
    []
  );

  const swiped = (direction, id) => {
    console.log('removing: ' + id);
    console.log(direction);
    // make api call to update database
  };

  const outOfFrame = (id) => {
    console.log(id, ' out of frame, removed from list');
    setIndex(index + 1);
  };

  const swipeButton = async (direction) => {
    await childRefs[profiles[index].id].current.swipe(direction);
  };

  const renderCards = () => {
    return profiles.slice(index).reverse().map((profile, i) => (
      <div className="swipe">
        <ProfileCard
          ref={childRefs[profile.id]}
          key={profile.id}
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
