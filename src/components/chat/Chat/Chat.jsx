import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  TextField,
} from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import io from 'socket.io-client';
import OTPRequest, { API, discordAvatar } from '../../../utils';
import Spinner from '../../utility/Spinner';
import './chat.css';

export default function Chat() {
  const history = useHistory();

  const { id: buddyId } = useParams();
  const myId = useSelector((state) => state.profile.discordId);
  const myAvatar = useSelector((state) => state.profile.discordAvatar);
  const myDisplayName = useSelector((state) => state.profile.displayName);
  const matches = useSelector((state) => state.match.matches);

  const [socket, setSocket] = useState();
  const [convo, setConvo] = useState([]);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const [match, setMatch] = useState();
  const [error, setError] = useState();

  //TODO - send on enter

  useEffect(() => {
    // check if buddy ID and I are matched

    const checkMatch = matches.filter(
      (match, i) => buddyId === match.liker.discordId
    );

    if (checkMatch) {
      setMatch(checkMatch[0]);
      // if matched, get chat history
      const getChatHistory = async () => {
        const response = await OTPRequest(`/chat/${buddyId}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }).catch(() => {
          setError(true);
          return null;
        });

        if (response) {
          console.log('response', response);
          setConvo(
            response.map((chatlog, i) => {
              return {
                user: chatlog.senderId,
                msg: chatlog.msg,
                timestamp: new Date(chatlog.date).toDateString(),
              };
            })
          );

          // setConvoHistory(response);
          setLoading(false);
        }
      };
      getChatHistory();
    } else {
      //if not matched, push back to chat page
      history.push('/messages');
    }
  }, []);

  useEffect(() => {
    // conect to socket
    const socket = io(API);

    // set the socket with the socket instance
    setSocket(socket);

    //socket instance.emit('event name', message being passed back)
    socket.emit('sendMyId', myId);

    socket.on('incomingMsg', (senderId, msg) => {
      setConvo((prevConvo) => [
        ...prevConvo,
        { user: senderId, msg, timestamp: new Date().toDateString() },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMsg = () => {
    if (msg) {
      setConvo([
        ...convo,
        { user: myId, msg, timestamp: new Date().toDateString() },
      ]);
      setMsg('');

      socket.emit('outgoingMsg', myId, buddyId, msg);
    } else {
      console.log('error sending message');
    }
  };

  const renderChat = () => {
    console.log('convo rendering', convo);
    return convo.map((c, i) => {
      if (c.user !== myId) {
        return (
          <Grid
            key={`chat${i}`}
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Avatar
              src={discordAvatar(
                match.liker.discordId,
                match.liker.discordAvatar
              )}
              alt={match.liker.displayName || match.liker.discordUsername}
            />
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
            <Avatar src={discordAvatar(myId, myAvatar)} alt={myDisplayName} />
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
        <Grid container direction="row" justify="center" alignItems="center" style={{padding:"5px 0 0 0"}}>
        {/* {match.liker.displayName || match.liker.discordUsername} */}
        {buddyId}
        </Grid>
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          className="chat-box scrollbar2"
        >
          {loading ? <Spinner /> : renderChat()}
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

//todo: anchor to bottom of scrollbar https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react
