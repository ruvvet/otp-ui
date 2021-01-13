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
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </Box>
  );
}
