import { Box } from '@material-ui/core';
import React from 'react';
import { socialMedia } from '../../../lookup';
import './details.css';

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
        {attIcon && <img src={attIcon} />}
        {defIcon && <img src={defIcon} />}
      </div>
      <div className="social">{renderSocials()}</div>
    </Box>
  );
}
