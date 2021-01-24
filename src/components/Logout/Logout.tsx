import React from 'react';
import './logout.css';
import { useHistory } from 'react-router-dom';

export default function Logout() {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('OTP_TOKEN');
    history.push('/login');
  };
  return <>{logout()}</>;
}
