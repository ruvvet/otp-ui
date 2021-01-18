import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Display from '../display/Display';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Switch, Route } from 'react-router-dom';
import './main.css';
//import './starbg.css';
import Messages from '../chat/Messages';
import Chat from '../chat/Chat';
import Settings from '../settings/Settings';
import Profile from '../profile/Profile';
import About from '../About/About';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDisplayName,
  setRank,
  setSocials,
  setMainAtt,
  setMainDef,
  initializeProfile
} from '../../store/profileSlice';
import { socialMedia } from '../../lookup';
import OTPRequest from '../../utils';

export default function Main() {
  const dispatch = useDispatch();

  const displayName = useSelector((state) => state.profile.displayName);
  const rank = useSelector((state) => state.profile.rank);
  const socials = useSelector((state) => state.profile.socials);
  const mainAtt = useSelector((state) => state.profile.mainAtt);
  const mainDef = useSelector((state) => state.profile.mainDef);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    console.log('in use effect');
    const getProfile = async () => {
      const response = await OTPRequest('/profile', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => {
        setError(true);
        return null;
      });

      console.log('RESPONSE', response);

      if (response) {
        console.log(response);
        dispatch(initializeProfile(response))
        // dispatch(setDisplayName(response.displayName));
        // dispatch(setRank(response.rank));
        // dispatch(
        //   setSocials({
        //     twitch: response.twitch ? response.twitch : '',
        //     twitter: response.twitter,
        //     instagram: response.instagram,
        //     snapchat: response.snapchat,
        //     tiktok: response.tiktok,
        //     spotify: response.spotify,
        //     facebook: response.facebook,
        //     reddit: response.reddit,
        //   })
        // );
        // dispatch(setMainAtt(response.mainAtt));
        // dispatch(setMainDef(response.mainDef));

        setLoading(false);
      }
    };
    getProfile();
  }, []);

  return (
    <Container className="main-container" maxWidth="sm">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        className="main-grid"
      >
        <Header />

        <Switch>
          <Route path="/swipes">
            <Messages />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/messages">
            {/* <Messages /> */}
            <Chat />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Display />
          </Route>
        </Switch>

        <Footer />
      </Grid>
    </Container>
  );
}
