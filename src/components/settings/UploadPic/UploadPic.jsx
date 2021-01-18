import { Grid, IconButton } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import React from 'react';
import './uploadpic.css';

export default function UploadPic({pic}) {

    const handleInput = (e, key) => {
        console.log(e.target.files[0]);
        //dispatch(setPics({...pics, [key]:e.target.files[0]}));
      };

      console.log(pic)
  return (
    <Grid item xs m={3}>
      {pic ? (
        <img src={pic} className="user-pics" />
      ) : (
        <>
          <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            style={{ display: 'none' }}
            onChange={(e) => handleInput(e)}
          />
          <label htmlFor="icon-button-file">
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
