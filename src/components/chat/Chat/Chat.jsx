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
import { useParams } from 'react-router-dom';
import { API } from '../../../utils';

export default function Chat() {
  const { id } = useParams();

  console.log('param id', id);

  const [socket, setSocket] = useState();
  const [tempId, setTempId] = useState();
  const [convo, setConvo] = useState([]);
  const [msg, setMsg] = useState('');

  //TODO - send on enter

  useEffect(() => {
    // conect to socket
    const socket = io(API);

    // set the socket with the socket instance
    setSocket(socket);

    //socket instance.emit('event name', message being passed back)
    socket.emit('sendMyId', tempId);

    socket.on('incomingMsg', (senderId, msg) => {
      setConvo((prevConvo) => [
        ...prevConvo,
        { user: parseInt(senderId), msg, timestamp: new Date().toDateString() },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, [tempId]);

  const handleSendMsg = () => {
    setConvo([
      ...convo,
      { user: parseInt(tempId), msg, timestamp: new Date().toDateString() },
    ]);
    setMsg('');

    socket.emit('outgoingMsg', tempId, id, msg);
  };

  console.log(convo);
  const renderChat = () => {
    return convo.map((c, i) => {
      if (c.user === tempId) {
        return (
          <Grid
            key={`chat${i}`}
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
              {c.msg}
            </Box>
            <Box className="chat-timestamp">{c.timestamp}</Box>
          </Grid>
        );
      } else {
        return (
          <Grid
            key={`chat${i}`}
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
              {c.msg}
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
          My#
          <input type="number" onChange={(e) => setTempId(e.target.value)} />
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
