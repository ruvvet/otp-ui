import { Box } from '@material-ui/core';
import React from 'react';
import { socialMedia } from '../../../lookup';
import './details.css';

interface DetailProps {
  name: string;
  rank: string;
  socials: {
    twitch?: string;
    twitter?: string;
    instagram?: string;
    snapchat?: string;
    tiktok?: string;
    spotify?: string;
    facebook?: string;
    reddit?: string;
  };
  rankIcon: string;
  attIcon: string;
  defIcon: string;
}

export default function Details({
  name,
  rank,
  socials,
  rankIcon,
  attIcon,
  defIcon,
}: DetailProps) {
  const renderSocials = () => {
    return socialMedia.reduce<JSX.Element[]>((final, s) => {
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
