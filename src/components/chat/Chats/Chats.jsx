import { Container, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatButton from '../ChatButton';
import './chats.css';
import io from 'socket.io-client';
import { API, getSocket } from '../../../utils';
import { setChatNotification } from '../../../store/chatSlice';

export default function Chats() {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [onlineStatus, setOnlineStatus] = useState({});

  const chats = useSelector((state) => state.chat.chats);
  const discordId = useSelector((state) => state.profile.discordId);

  useEffect(() => {
    // set the socket with the socket instance
    const socket = getSocket();

    chats.map((buddy, i) => {
      socket.emit('checkOnline', discordId, buddy.discordId);

      socket.on('confirmOnline', (buddyId, online) => {
        console.log('online?');
        if (online) {
          console.log(buddyId, 'online');
          setOnlineStatus({ ...onlineStatus, [buddyId]: online });
        }
      });
    });

    console.log(onlineStatus, Object.keys(onlineStatus).length)
    dispatch(setChatNotification(Object.keys(onlineStatus).length))
  }, []);




  const renderChats = () => {
    return chats.map((chat, i) => (
      <ChatButton
        key={`chatBuddy${i}`}
        chatBuddy={chat}
        online={onlineStatus[chat.discordId]}
      />
    ));
  };

  return (
    <Container maxWidth="sm" className="messages-container scrollbar2">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="messages-wrapper"
      >
        {renderChats()}
      </Grid>
    </Container>
  );
}
