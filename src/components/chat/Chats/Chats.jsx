import { Container, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ChatButton from '../ChatButton';
import './chats.css';
import io from 'socket.io-client';
import { API } from '../../../utils';

export default function Chats() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [socket, setSocket] = useState();
  const [onlineStatus, setOnlineStatus] = useState([]);

  const chats = useSelector((state) => state.chat.chats);
  const discordId = useSelector((state) => state.profile.discordId);

  useEffect(() => {
    // conect to socket
    const socket = io(API);

    // set the socket with the socket instance
    setSocket(socket);

    //socket instance.emit('event name', message being passed back)
    socket.emit('sendMyId', discordId );


    chats.map((buddy, i) => {
      socket.emit('checkOnline', discordId, buddy.receiverId);

      socket.on('confirmOnline', (buddyId, online) => {
        console.log('online?')
        if (online) {
          console.log(buddyId,'online');
          setOnlineStatus([...onlineStatus, online])
        }
      });
    });

    socket.on('', (senderId, msg) => {});

    return () => {
      socket.disconnect();
    };
  }, []);

  const renderChats = () => {
    return chats.map((chat, i) => (
      <ChatButton key={`chatBuddy${i}`} chatBuddy={chat} online={onlineStatus[i]}/>
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
