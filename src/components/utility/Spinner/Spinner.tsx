import React from 'react';
import './spinner.css';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Spinner() {
  return <div className = "spinner-div" ><CircularProgress /></div>;
}
