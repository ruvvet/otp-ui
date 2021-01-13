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

export default function Settings() {
  const [displayName, setDisplayName] = useState('');
  const [rank, setRank] = useState();
  const [twitch, setTwitch] = useState();
  const [twitter, setTwitter] = useState();
  const [instagram, setInstagram] = useState();
  const [snapchat, setSnapchat] = useState();
  const [tiktok, setTiktok] = useState();
  const [spotify, setSpotify] = useState();
  const [reddit, setReddit] = useState();
  const [facebook, setFacebook] = useState();

  const [mainAtt, setMainAtt] = useState();
  const [mainDef, setMainDef] = useState();
  const [about, setAbout] = useState();
  const [rankRange, setRankRange] = useState([20, 37]);

  const socials = [
    'twitch',
    'twitter',
    'instagram',
    'snapchat',
    'tiktok',
    'spotify',
    'facebook',
    'reddit',
  ];

  const ranks = [
    'Copper V',
    'Copper IV',
    'Copper III',
    'Copper II',
    'Copper I',
    'Bronze V',
    'Bronze IV',
    'Bronze III',
    'Bronze II',
    'Bronze I',
    'Silver V',
    'Silver IV',
    'Silver III',
    'Silver II',
    'Silver I',
    'Gold III',
    'Gold II',
    'Gold I',
    'Platinum III',
    'Platinum II',
    'Platinum I',
    'Diamond',
    'Champion',
  ];

  const att = [
    'Hibana',
    'Thermite',
    'Ash',
    'Buck',
    'Kali',
    'Maverick',
    'Sledge',
    'Thatcher',
    'Twitch',
    'Zero',
    'Zofia',
    'Blackbeard',
    'Capitao',
    'Dokkaebi',
    'Finka',
    'Glaz',
    'Gridlock',
    'Iana',
    'IQ',
    'Jackal',
    'Lion',
    'Montagne',
    'Nomad',
    'Ying',
    'Amaru',
    'Blitz',
    'Fuze',
    'Nøkk',
  ];
//TODO: put into reference z-table
  const def = [
    'Aruni',
    'Bandit',
    'Mute',
    'Kaid',
    'Jager',
    'Mira',
    'Mozzie',
    'Pulse',
    'Rook',
    'Valkyrie',
    'Wamai',
    'Alibi',
    'Caveira',
    'Doc',
    'Echo',
    'Ela',
    'Frost',
    'Goyo',
    'Kapkan',
    'Lesion',
    'Maestro',
    'Smoke',
    'Vigil',
    'Warden',
    'Castle',
    'Clash',
    'Oryx',
    'Tachanka',
  ];

  const handleRankRange = (event, newValue) => {
    setRankRange(newValue);
  };

  const renderSocialInputs = () => {
    return socials.map((s, i) => (
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <img src={`./img/${s}.png`} />
        </Grid>
        <Grid item>
          <TextField
            key={`input-${i}`}
            id={s}
            label={s.toUpperCase()}
            className="input"
            // helperText={`https://${s}.com/${twitter}`}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </Grid>
      </Grid>
    ));
  };

  const renderSelects = (list) => {
    return list.map((r, i) => <MenuItem value={i}>{r}</MenuItem>);
  };

  return (
    <Container maxWidth="sm" className="settings-container">
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
        id="rank-select"
        value={rank}
        onChange={() => {
          setRank(1);
        }}
        fullWidth
      >
        {renderSelects(ranks)}
      </Select>
      <div className="add-pfp">
        Add PFP
        <IconButton>
          <AddCircleRoundedIcon className="icon" />
        </IconButton>
      </div>
      {renderSocialInputs()}
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
      <FormControl variant="outlined">
        <InputLabel id="rank-input">Att Main</InputLabel>
        <Select
          label="att"
          id="rank-select"
          value={mainAtt}
          onChange={() => {
            setMainAtt(1);
          }}
          autoWidth = {true}
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
          onChange={() => {
            setMainDef(1);
          }}
        >
          {renderSelects(def)}
        </Select>
      </FormControl>
    </Container>
  );
}
