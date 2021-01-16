import { Box } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './details.css';
import { socialMedia } from '../../../lookup';

export default function Details({ profile, rankIcon, attIcon, defIcon }) {
  const renderSocials = () => {
    const socials = socialMedia.filter((s, i) => profile[s.site] !== null);

    return socials.map((site, i) => (
      <div>
        <a href={`${site.url}${profile[site.site]}`}>
          <img src={site.img} />
        </a>
      </div>
    ));
  };



  const testReduce = () =>{

    const socials2 = socialMedia.reduce((final, s)=>{
      if (profile[s.site]!== null){
        final.push(<div>hello</div>)
      }
      return final
    }, [])

    console.log(socials2.join())


  }

  testReduce()

  return (
    <Box className="details-container scrollbar">
      <div>
        {' '}
        <img className="rank-profile-icon" src={rankIcon} />
        {profile.displayName.toUpperCase()}, {profile.rank}
      </div>
      <div className="mains">
        <img src={attIcon} />
        <img src={defIcon} />
      </div>
      <div className="social">{renderSocials()}</div>
    </Box>
  );
}
