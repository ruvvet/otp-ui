import {
  TextField,
  Box,
  Container,
  Grid,
  IconButton,
  Avatar,
  Typography,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import './chat.css';
import io from 'socket.io-client';

export default function Chat({ chat }) {
  const [socket, setSocket] = useState();
  const [number, setNumber] = useState(1);
  const [msg, setMsg] = useState('');

  const currentUser = 1;
  const pretendChat = [
    { user: 1, message: 'hi', timestamp: '1000' },
    { user: 2, message: 'hiya', timestamp: '1001' },
    { user: 1, message: 'hiasgsg', timestamp: '1002' },
    { user: 2, message: 'hiasgsgasdgasg', timestamp: '1003' },
    {
      user: 2,
      message:
        'hiasgsgasdgasgdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      timestamp: '1004',
    },
    {
      user: 1,
      message:
        'hiasgsgasdgasgdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      timestamp: '1004',
    },
    {
      user: 2,
      message:
        'hiasgsgasdgasgdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      timestamp: '1004',
    },
    {
      user: 2,
      message:
        'hiasgsgasdgasgdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      timestamp: '1004',
    },
    {
      user: 2,
      message:
        'hiasgsgasdgasgdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      timestamp: '1004',
    },
  ];

  //TODO - send on enter

  useEffect(() => {
    const socket = io('http://localhost:5000');

    setSocket(socket);

    socket.emit('hello', number);

    socket.on('outgoingMsg', (senderId, msg) => {
      console.log(senderId, msg);
    });

    return () => {
      socket.disconnect();
    };
  }, [number]);

  const handleSendMsg = () => {
    socket.emit('incomingMsg', number, 2, msg);
  };

  const renderChat = () => {
    return pretendChat.map((c, i) => {
      if (c.user === currentUser) {
        return (
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Avatar src="#">{c.user}</Avatar>
            <Box
              component="span"
              m={1}
              p={1}
              style={{
                background: '#FFFFFF70',
              }}
              className="chat-message"
            >
              {c.message}
            </Box>
            <Box className="chat-timestamp">{c.timestamp}</Box>
          </Grid>
        );
      } else {
        return (
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Box className="chat-timestamp">{c.timestamp}</Box>
            <Box
              component="span"
              m={1}
              p={1}
              style={{
                background: '#00000030',
              }}
              className="chat-message"
            >
              {c.message}
            </Box>
            <Avatar src="#">{c.user}</Avatar>
          </Grid>
        );
      }
    });
  };

  return (
    <Container maxWidth="sm" className="chat-container">
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        style={{ height: '100%' }}
      >
        <Grid container direction="row" justify="center" alignItems="center">
          You are chatting with: //..
        </Grid>
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          className="chat-box scrollbar2"
        >
          {renderChat()}
        </Grid>

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className="chat-send"
        >
          {/* <input type="number" value = {number} onChange={(e)=>setNumber(e.target.value)}/> */}

          <Grid item xs={11}>
            <TextField
              id="filled-multiline-static"
              label="Type here..."
              multiline
              placeholder="Start Chatting"
              variant="filled"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={handleSendMsg}>
              <SendRoundedIcon
                style={{
                  padding: 0,
                  fontSize: '2rem',
                  color: '#dedede',
                  borderRadius: 0,
                }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
