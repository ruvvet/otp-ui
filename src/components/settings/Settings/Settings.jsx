import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { att, def, ranks, socialMedia } from '../../../lookup';
import {
  setDisplayName,
  setMainAtt,
  setMainDef,
  setRank,
  setSocials,
} from '../../../store/profileSlice';
import OTPRequest from '../../../utils';
import UploadPic from '../UploadPic/UploadPic';
import './settings.css';

export default function Settings() {
  const dispatch = useDispatch();

  const displayName = useSelector((state) => state.profile.displayName);
  const rank = useSelector((state) => state.profile.rank);
  const pics = useSelector((state) => state.profile.pics);
  const socials = useSelector((state) => state.profile.socials);
  const mainAtt = useSelector((state) => state.profile.mainAtt);
  const mainDef = useSelector((state) => state.profile.mainDef);

  const [snackbar, setSnackbar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    console.log('submitting');
    setSnackbar(true);
    e.preventDefault();

    const newProfile = {
      displayName,
      rank,
      //pictures,
      socials,
      mainAtt,
      mainDef,
    };

    await OTPRequest('/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProfile),
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(false);
  };

  const renderSocialInputs = (list) => {
    return list.map((s, i) => (
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <img src={s.img} />
        </Grid>
        <Grid item>
          <TextField
            key={`input-${i}`}
            id={s.site}
            label={s.site.toUpperCase()}
            // value = {socials[s.site]}
            className="input"
            helperText={
              `${s.url}${socials[s.site]}`.length > 25
                ? `${s.url}${socials[s.site]}`.slice(0, 25) + '...'
                : `${s.url}${socials[s.site]}`
            }
            onChange={(e) => {
              dispatch(setSocials({ ...socials, [s.site]: e.target.value }));
            }}
          />
        </Grid>
      </Grid>
    ));
  };

  const renderSelects = (list) => {
    return list.map((item, i) => (
      <MenuItem divider value={item.rank || item.operator}>
        <img className="select-img" src={item.img} />
        {item.rank ? item.rank : item.operator}
      </MenuItem>
    ));
  };

  const renderPics = () => {
    return Object.keys(pics).map((picKey) => (
      <UploadPic picKey={picKey} pic={pics[picKey]} />
    ));
  };

  return (
    <Container maxWidth="sm" className="settings-container">
      {/* <Grid container direction="column" justify="center" alignItems="center"> */}
      <Grid item xs={12} className="settings-section profile">
        <TextField
          id="standard-full-width"
          value={displayName}
          style={{ margin: 8 }}
          placeholder="Display Name"
          helperText={`Hi my name is ...${displayName}`}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            dispatch(setDisplayName(e.target.value));
          }}
        />
        <InputLabel id="rank-input">Rank</InputLabel>
        <Select
          labelId="rank-input"
          value={rank}
          onChange={(e) => {
            dispatch(setRank(e.target.value));
          }}
          fullWidth
        >
          {renderSelects(ranks)}
        </Select>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          {renderPics()}
        </Grid>
      </Grid>
      <Grid item xs={12} className="settings-section social">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={6} px={1}>
            {renderSocialInputs(socialMedia.slice(0, socialMedia.length / 2))}
          </Grid>
          <Grid item xs={6} px={1}>
            {renderSocialInputs(socialMedia.slice(socialMedia.length / 2))}
          </Grid>
          {/* Rank Slider
      <Slider
        value={rankRange}
        onChange={handleRankRange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={() => {
          return `${rankRange}`;
        }}
      /> */}
        </Grid>
      </Grid>
      <Grid item xs={12} className="settings-section ops" id="ops">
        <FormControl variant="outlined">
          <InputLabel id="rank-input">Att Main</InputLabel>
          <Select
            label="att"
            id="rank-select"
            value={mainAtt}
            className="settings-main-op"
            onChange={(e) => {
              dispatch(setMainAtt(e.target.value));
            }}
            autoWidth={true}
          >
            {renderSelects(att)}
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel id="rank-input">Def Main</InputLabel>
          <Select
            label="def"
            id="rank-select"
            value={mainDef}
            className="settings-main-op"
            onChange={(e) => {
              dispatch(setMainDef(e.target.value));
            }}
          >
            {renderSelects(def)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} className="save-button">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="settings-submit"
          startIcon={<SaveIcon />}
          onClick={handleSubmit}
        >
          Save
        </Button>
        <Snackbar
          open={snackbar}
          onClose={handleCloseSnackbar}
          autoHideDuration={3000}
          message="Saved!"
        />
      </Grid>
      {/* </Grid> */}
    </Container>
  );
}

//TODO: PROGRESS FOR SAVE BUTTON: https://material-ui.com/components/progress/
