import { Container, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ChatButton from '../ChatButton';
import './chats.css';

export default function Chats() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const chats = useSelector((state) => state.chat.chats);
  // useEffect(() => {
  //   // conect to socket
  //   const socket = io(API);

  //   // set the socket with the socket instance
  //   setSocket(socket);

  //   //socket instance.emit('event name', message being passed back)
  //   socket.emit('sendMyId', '1');

  //   const checkOnline = [];

  //   chats.map((c, i) => {
  //     socket.emit('checkOnline', c, '1');

  //     socket.on('confirmOnline', (buddyId, onlineStatus) => {
  //       if (onlineStatus) {
  //         console.log('hi');
  //       }
  //     });
  //   });

  //   socket.on('', (senderId, msg) => {});

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  const renderChats = () => {
    return chats.map((chat, i) => (
      <ChatButton key={`chatBuddy${i}`} chatBuddy={chat} />
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
