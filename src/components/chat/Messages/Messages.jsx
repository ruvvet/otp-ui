import { Box, Container } from '@material-ui/core';
import React from 'react';
import Chat from '../Chat/Chat';
import './messages.css';

const pretendChats = [
  {
    name: 'person1',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
    message: 'hello',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
    message: 'hi',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
    message: 'hi',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
    message: 'hi',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
    message: 'hi',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
    message: 'hi',
  },
  {
    name: 'person2',
    img:
      'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
    message: 'hi',
  },
];

const renderMessages = () => {
 
};

export default function Messages() {
  return (
    <Container className="messages-container">{renderMessages()}</Container>
  );
}
