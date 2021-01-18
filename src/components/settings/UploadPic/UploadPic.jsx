import { Grid, IconButton } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import React from 'react';
import OTPRequest from '../../../utils';
import './uploadpic.css';

export default function UploadPic({ picKey, pic }) {


  const handleInput = async (e, picKey) => {
    console.log(e.target.files[0]);
    console.log(picKey);

    const formData = new FormData();
    formData.append('pic', e.target.files[0]);
    formData.append('picKey', picKey)

    await OTPRequest('/profile/pics', {
      method: 'PUT',
      body: formData
    });
  };

  return (

    <Grid item xs className = "upload-pic-item">
      {pic ? (
        <>
        <img src={pic} />
        </>
      ) : (
        <>
          <input
            accept="image/*"
            id={picKey}
            type="file"
            style={{ display: 'none' }}
            onChange={(e) => handleInput(e, picKey)}
          />
          <label htmlFor={picKey}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </>
      )}
    </Grid>

  );
}
