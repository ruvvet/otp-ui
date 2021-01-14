import { Box } from '@material-ui/core';
import React from 'react';
import './details.css';

export default function Details({ profile }) {
  const pretendSocial = [
    'twitch',
    'twitter',
    'instagram',
    'snapchat',
    'tiktok',
    'spotify',
    'facebook',
    'reddit',
  ];

  const renderSocials = () => {
    return pretendSocial.map((site) => (
      <div>
        <a href="#">
          <img src={`./img/${site}.png`} />
        </a>
      </div>
    ));
  };

  return (
    <Box className="details-container scrollbar">
     {profile.name.toUpperCase()}, rank lookup
      <div className="mains">
        <img src="https://r6operators.marcopixel.eu/icons/png/finka.png" />
        <img src="https://r6operators.marcopixel.eu/icons/png/dokkaebi.png" />
      </div>
      <div className="social">{renderSocials()}</div>
    </Box>
  );
}
