import { Grid, IconButton, Snackbar } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import React, { useState } from 'react';
import OTPRequest from '../../../utils';
import './uploadpic.css';

export default function UploadPic({ picKey, pic }) {
  const [snackbar, setSnackbar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const handleCloseSnackbar = () => {
    setSnackbar(false);
  };

  const handleInput = async (e, picKey) => {
    setSnackbar(true);

    const formData = new FormData();
    formData.append('pic', e.target.files[0]);
    formData.append('picKey', picKey);

    await OTPRequest('/profile/pics', {
      method: 'PUT',
      body: formData,
    });
  };

  return (
    <Grid item xs className="upload-pic-item">
      {pic ? (
        <>
          <img src={pic} />
          <div className="float-input">
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
                className="input-icon"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </div>
        </>
      ) : (
        <div>
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
        </div>
      )}

      <Snackbar
        open={snackbar}
        onClose={handleCloseSnackbar}
        autoHideDuration={3000}
        message="Saved!"
      />
    </Grid>
  );
}
