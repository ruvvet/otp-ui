import { Box } from '@material-ui/core';
import React from 'react';
import './chat.css'

export default function Chat({ chat }) {
  return <Box className = "chat-container" m><img src={chat.img}/> {chat.name}: {chat.message}</Box>
}
