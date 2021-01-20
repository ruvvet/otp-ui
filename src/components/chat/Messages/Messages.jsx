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
import React from 'react';
import { Link } from 'react-router-dom';
import './messages.css';

const pretendMatch = [
  {
    name: 'person1',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
  },
];

export default function Messages() {
  const renderMessages = () => {
    return pretendMatch.map((match, i) => (
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
              <Avatar alt={match.name} src={match.img} />
            </Badge>
          </Grid>
          <Grid item xs>
            {match.name}
          </Grid>
          <Grid item xs>
            <Tooltip title="Send a message!" style={{ padding: 0 }}>
              <Link to={`/messages/${match.name}`}>
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
                href={`https://discordapp.com/users/${match.id}`}
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
        className= "messages-wrapper"

      >
        {renderMessages()}
      </Grid>
    </Container>
  );
}
