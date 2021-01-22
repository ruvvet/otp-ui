import {
  Avatar,
  Badge,
  Container,
  Grid,
  IconButton,
  Paper,
  Tooltip,
} from '@material-ui/core';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OTPRequest, { API } from '../../../utils';
import './messages.css';
import io from 'socket.io-client';

export default function Messages() {
  const [convos, setConvos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();


  useEffect(() => {
    const getConvos = async () => {
      const response = await OTPRequest('/chat/convos', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => {
        setError(true);
        return null;
      });

      if (response) {

        const tempId = '1';

        const uniqueConvos = response.reduce((result, convo) => {
          if (
            !result.includes(convo.chat_receiver) &&
            convo.chat_receiver !== tempId
          ) {
            result.push(convo.chat_receiver);
          }
          if (
            !result.includes(convo.chat_sender) &&
            convo.chat_sender !== tempId
          ) {
            result.push(convo.chat_sender);
          }
          return result;
        }, []);

        setConvos(uniqueConvos);
        setLoading(false);
      }
    };
    getConvos();
  }, []);

  // useEffect(() => {
  //   // conect to socket
  //   const socket = io(API);

  //   // set the socket with the socket instance
  //   setSocket(socket);

  //   //socket instance.emit('event name', message being passed back)
  //   socket.emit('sendMyId', '1');

  //   const checkOnline = [];

  //   convos.map((c, i) => {
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

  const renderMessages = () => {
    return convos.map((convo, i) => (
      <Paper elevation={0} className="message-match">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs>
            <Badge
              className="online-badge"
              badgeContent={100}
              color="primary"
              className="badge"
              variant="dot"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              overlap="circle"
              invisible={false}
            >
              <Avatar alt={convo.name} src={convo.img} />
            </Badge>
          </Grid>
          <Grid item xs>
            {convo}
          </Grid>
          <Grid item xs>
            <Tooltip title="Send a message!" style={{ padding: 0 }}>
              <Link to={`/messages/${convo}`}>
                <IconButton
                  className="icon"
                  // href={`/messages/${match.name}`}
                >
                  <ChatRoundedIcon
                    className="icon"
                    color="primary"
                    style={{ padding: 5, fontSize: '2rem' }}
                  />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip
              title="Send Discord Friend Request!"
              style={{ padding: 0 }}
            >
              <IconButton
                className="icon"
                href={`https://discordapp.com/users/${convo.id}`}
              >
                <img
                  style={{
                    height: 30,
                    width: 30,
                    padding: 5,
                    fontSize: '2rem',
                    color: '#dedede',
                  }}
                  src="./img/discord.png"
                />
              </IconButton>
            </Tooltip>

            {/* <Chip
            icon={
              <img style={{ height: 20, width: 20 }} src="./img/discord.png" />
            }
            label="Send"
            clickable
            color="primary"
            onClick={() =>
              window.open(`https://discordapp.com/users/${match.id}`)
            }
          /> */}
          </Grid>
        </Grid>
      </Paper>
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
        {/* {renderMessages()} */}
      </Grid>
    </Container>
  );
}
