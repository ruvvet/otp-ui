import { Box } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './details.css';
import { socialMedia } from '../../../lookup';

export default function Details({
  name,
  rank,
  socials,
  rankIcon,
  attIcon,
  defIcon,
}) {
  const renderSocials = () => {

    return socialMedia.reduce((final, s) => {
      if (socials[s.site]) {
        final.push(
          <div>
            <a href={`https://www.${s.url}${socials[s.site]}`} target="_blank">
              <img src={s.img} />
            </a>
          </div>
        );
      }
      return final;
    }, []);
  };

  return (
    <Box className="details-container scrollbar">
      <div>
        {' '}
        <img className="rank-profile-icon" src={rankIcon} />
        {name.toUpperCase()}, {rank}
      </div>
      <div className="mains">
        <img src={attIcon} />
        <img src={defIcon} />
      </div>
      <div className="social">{renderSocials()}</div>
    </Box>
  );
}
