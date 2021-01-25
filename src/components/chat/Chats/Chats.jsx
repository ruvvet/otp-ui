import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import ChatButton from '../ChatButton';
import './chats.css';


export default function Chats() {
  const chats = useSelector((state) => state.chat.chats);

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
