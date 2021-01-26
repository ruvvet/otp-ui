import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import io from 'socket.io-client';
import { MatchResponse } from '../../interfaces';
import { RootState } from '../../store';
import {
  setChats,
  setOfflineChat,
  setOnlineChat,
  setOnlineChats,
} from '../../store/chatSlice';
import { setMatches, setMatchNotification } from '../../store/matchSlice';
import { initializeProfile } from '../../store/profileSlice';
import OTPRequest, { API, getSocket, setSocket } from '../../utils';
import About from '../About/About';
import Chat from '../chat/Chat';
import Messages from '../chat/Chats';
import Display from '../display/Display';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Matches from '../match/Matches';
import Profile from '../profile/Profile';
import Settings from '../settings/Settings';
import Spinner from '../utility/Spinner';
import './main.css';

export default function Main() {
  const dispatch = useDispatch();
  const discordId = useSelector((state: RootState) => state.profile.discordId);
  const chats = useSelector((state: RootState) => state.chat.chats);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const profileResponse = await OTPRequest('/profile', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => {
        setError(true);
        return null;
      });

      if (profileResponse) {
        dispatch(initializeProfile(profileResponse));
      }

      const matchResponse = await OTPRequest('/swipe/matches', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => {
        setError(true);
        return null;
      });

      if (matchResponse) {
        dispatch(setMatches(matchResponse));

        const matchCounter = matchResponse.filter(
          (match: MatchResponse) =>
            new Date(match.time).getTime() >
            Date.parse(profileResponse.lastActive)
        );

        dispatch(setMatchNotification(matchCounter.length));
      }

      const chatResponse = await OTPRequest('/chat', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => {
        setError(true);
        return null;
      });

      if (chatResponse) {
        dispatch(setChats(chatResponse));

        // dispatch(setChatNotification(5));
      }

      setLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    if (discordId) {
      // conect to socket
      const socket = io(API!);

      // set the socket with the socket instance
      setSocket(socket);

      //socket instance.emit('event name', message being passed back)
      socket.emit('sendMyId', discordId);

      return () => {
        socket.disconnect();
      };
    }
  }, [discordId]);

  useEffect(() => {
    const socket = getSocket();
    if (socket) {
      socket.emit('getOnline', chats);

      socket.on('onlineChats', (onlineChats: string[]) => {
        dispatch(setOnlineChats(onlineChats));
      });

      socket.on('nowOnline', (onlineId: string) => {
        dispatch(setOnlineChat(onlineId));
      });

      socket.on('nowOffline', (offlineId: string) => {
        dispatch(setOfflineChat(offlineId));
      });
    }
  }, [chats]);

  return (
    <Container className="main-container" maxWidth="sm">
      <Header />
      <div className="main-body">
        {loading ? (
          <div className="main-spinner">
            <Spinner />
          </div>
        ) : (
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/messages/:id">
              <Chat />
            </Route>
            <Route path="/messages">
              <Messages />
            </Route>
            <Route path="/matches">
              <Matches />
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
        )}
      </div>
      <Footer />
    </Container>
  );
}
