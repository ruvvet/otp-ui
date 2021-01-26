import { Container, Grid } from '@material-ui/core';
import React, {
  createRef,
  useMemo,
  useState,
  useEffect,
  Ref,
  RefObject,
} from 'react';
import ProfileCard from '../ProfileCard';
import './display.css';
import OTPRequest from '../../../utils';
import Spinner from '../../utility/Spinner';
import { ProfileResponse } from '../../../interfaces';

export default function Display() {
  const [profiles, setProfiles] = useState<ProfileResponse[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refs, setRefs] = useState<{ [k: string]: RefObject<HTMLDivElement> }>(
    {}
  );

  const shuffle = (profiles: ProfileResponse[]) => {
    //shuffle the profiles
    // with durstenfeld algo
    for (let i = profiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [profiles[i], profiles[j]] = [profiles[j], profiles[i]];
    }
  };

  useEffect(() => {
    const getProfiles = async () => {
      const response = await OTPRequest('/swipe', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => {
        setError(true);
        return null;
      });

      if (response) {
        if (response.profiles.length) {
          const shuffleProfiles: ProfileResponse[] = [...response.profiles];
          shuffle(shuffleProfiles);

          setProfiles(shuffleProfiles);

          setRefs(
            shuffleProfiles.reduce<{ [k: string]: RefObject<HTMLDivElement> }>(
              (result, profile) => {
                result[profile.discordId] = createRef<HTMLDivElement>();

                return result;
              },
              {}
            )
          );
        }
      }
      setLoading(false);
    };

    getProfiles();
  }, []);

  const swiped = async (direction: string, id: string) => {
    console.log('removing: ' + id);
    console.log(direction);
    // make api call to update database
    if (direction === 'right') {
      await OTPRequest('/swipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ swipeId: id }),
      });
    }
  };

  const outOfFrame = (id: string) => {
    console.log(id, ' out of frame, removed from list');
    setIndex(index + 1);
  };

  const swipeButton = async (direction: string) => {
    const profileRef = refs[profiles[index].discordId];

    if (!profileRef || !profileRef.current) {
      return;
    }
    await (profileRef.current as any).swipe(direction);
  };

  //TODO - this button doesnt work

  const renderCards = () => {
    if (profiles.length > 0) {
      return profiles
        .slice(index)
        .reverse()
        .map((profile, i) => (
          <div className="swipe">
            <ProfileCard
              ref={refs[profile.discordId]}
              key={profile.discordId}
              profile={profile}
              swiped={swiped}
              outOfFrame={outOfFrame}
              swipeButton={swipeButton}
            />
          </div>
        ));
    }

    return <>{':('}</>;
  };

  return (
    <Container className="card-container" maxWidth="sm">
      <Grid container direction="column" justify="center" alignItems="center" className="card-container">
        {loading ? <Spinner /> : renderCards()}
      </Grid>
    </Container>
  );
}
