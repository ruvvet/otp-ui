import {
  Container,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from '@material-ui/core';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import { React, useState } from 'react';
import './settings.css';
import './settings.css';
import { socialMedia, ranks, att, def } from '../../../lookup';

export default function Settings() {
  const [displayName, setDisplayName] = useState('');
  const [rank, setRank] = useState();
  const [socials, setSocials] = useState({ twitter: 'hi', twitch: 'hello' });
  const [mainAtt, setMainAtt] = useState('Ash');
  const [mainDef, setMainDef] = useState('Frost');
  const [about, setAbout] = useState();
  const [rankRange, setRankRange] = useState([20, 37]);

  const handleRankRange = (event, newValue) => {
    setRankRange(newValue);
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
            className="input"
            helperText={`https://${s.url}${socials[s.site]}`}
            onChange={(e) => {
              setSocials({ ...socials, [s.site]: e.target.value });
            }}
          />
        </Grid>
      </Grid>
    ));
  };

  const renderSelects = (list) => {
    return list.map((item, i) => (
      <MenuItem value={item.rank ? item.rank : item.operator}>
        <img className="select-img" src={item.img} />
        {item.rank ? item.rank : item.operator}
      </MenuItem>
    ));
  };

  const pics = [
    'https://specials-images.forbesimg.com/imageserve/5f5f55887d9eec237a586841/960x0.jpg',
    'https://www.tubefilter.com/wp-content/uploads/2020/11/pokimane-twitch-donations-cap-streamlabs.jpg',
    'https://cdn1.dotesports.com/wp-content/uploads/2020/09/14075123/pokimane-vtuber-1024x575.jpg',
  ];

  const renderPics = () => {
    return pics.map((img, i) => (
      <Grid item xs>
        <img src={img} className = "user-pics"/>
      </Grid>
    ));
  };

  return (
    <Container maxWidth="sm" className="settings-container">
      {/* <Grid container direction="column" justify="center" alignItems="center"> */}
      <Grid item xs={12} className="settings-section profile">
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Display Name"
          helperText={`Hi my name is ...${displayName}`}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            setDisplayName(e.target.value);
          }}
        />
        <InputLabel id="rank-input">Rank</InputLabel>
        <Select
          labelId="rank-input"
          value={rank}
          onChange={() => {
            setRank(1);
          }}
          fullWidth
        >
          {renderSelects(ranks)}
        </Select>
        <Grid
          className="add-pfp"
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs>
            <IconButton>
              <AddCircleRoundedIcon className="icon" />
            </IconButton>
          </Grid>
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
            onChange={(e) => {
              console.log(e.target.value);
              setMainAtt(e.target.value);
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
            onChange={(e) => {
              console.log(e.target.value);
              setMainDef(e.target.value);
            }}
          >
            {renderSelects(def)}
          </Select>
        </FormControl>
      </Grid>
      {/* </Grid> */}
    </Container>
  );
}
