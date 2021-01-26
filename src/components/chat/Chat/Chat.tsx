import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ChatLog, MatchResponse } from '../../../interfaces';
import { RootState } from '../../../store';
import OTPRequest, { createTimeStamp, discordAvatar, getSocket } from '../../../utils';
import Spinner from '../../utility/Spinner';
import './chat.css';

export default function Chat() {
  const history = useHistory();
  const bottomRef = useRef<HTMLDivElement>(null);
  const { id: buddyId }: { id: string } = useParams();

  //selectors
  const myId = useSelector((state: RootState) => state.profile.discordId);
  const myAvatar = useSelector(
    (state: RootState) => state.profile.discordAvatar
  );
  const myDisplayName = useSelector(
    (state: RootState) => state.profile.displayName
  );
  const matches = useSelector((state: RootState) => state.match.matches);

  //state
  const [convo, setConvo] = useState<
    { user: string; msg: string; timestamp: string }[]
  >([]);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const [match, setMatch] = useState<MatchResponse>();
  const [error, setError] = useState(false);

  useEffect(() => {
    // check if buddy ID and I are matched

    const checkMatch = matches.filter(
      (match, i) => buddyId === match.liker.discordId
    );

    if (checkMatch.length) {
      setMatch(checkMatch[0] as MatchResponse);
      // if matched, get chat history
      const getChatHistory = async () => {
        const response = await OTPRequest(`/chat/${buddyId}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }).catch(() => {
          setError(true);
          return null;
        });

        if (response as ChatLog[]) {

          setConvo(
            response.map((chatlog: ChatLog) => {
              return {
                user: chatlog.senderId,
                msg: chatlog.msg,
                // timestamp: new Date(chatlog.date).toDateString(),
                timestamp: createTimeStamp(new Date(chatlog.date))
              };
            })
          );


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
    const socket = getSocket();

    socket.on('incomingMsg', (senderId: string, msg: string) => {
      setConvo((prevConvo) => [
        ...prevConvo,
        { user: senderId, msg, timestamp: createTimeStamp(new Date()) },
      ]);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (bottomRef.current) {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [convo]);

  const handleSendMsg = () => {
    if (msg) {
      setConvo([
        ...convo,
        { user: myId, msg, timestamp: createTimeStamp(new Date()) },
      ]);
      setMsg('');

      getSocket().emit('outgoingMsg', myId, buddyId, msg);
    } else {
      console.log('error sending message');
    }
  };

  const handleKeyDown = (key: string) => {
    if (key === 'Enter') {
      handleSendMsg();
    }
  };

  const renderChat = () => {
    if (!match) {
      return null;
    }
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
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ padding: '10px 0' }}
        >
          <Typography variant="h5" style={{textTransform:"uppercase"}}>{match && (match.liker.displayName || match.liker.discordUsername)}</Typography>
        </Grid>
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          className="chat-box scrollbar2"
        >
<div className="chat-alignment">
          {loading ? <Spinner /> : renderChat()}
          <div id="bottom-ref" ref={bottomRef} />
          </div>
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="center"
          className="chat-send"
        >
          {/* <input type="number" value = {number} onChange={(e)=>setNumber(e.target.value)}/> */}

          <Grid item xs={11}>
            <TextField
              id="filled-multiline-static"
              label="Type here..."
              placeholder="Start Chatting"
              variant="filled"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                handleKeyDown(e.key)
              }
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


//TODO: fix chat spacing
