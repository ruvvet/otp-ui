import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import OTPRequest from '../../utils';

export default function Callback() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    // get the code from the url query
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    console.log('code', code);

    // if a code is returned
    if (code) {
      // make a call to the api endpoint to exchange the code for the google_id

      const login = async () => {
        const response = await OTPRequest(
          '/authorize/exchange',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code }),
          },
          true
        );

        // we save the google_id to the local storage
        // this is their identifier
        // and maintains the session
        const token = await response.json();
        localStorage.setItem('OTP_TOKEN', token);

        // if 201 status, they are a new user
        if (response.status === 201) {
          history.push('/settings');
        } else {

        // else push to main page
        history.push('/');
        }
      };

      login();
    } else {
      // they did not authorize/we did not get a code back and they need to relogin
      history.push('/login');
    }
  }, []);

  return null;
}
