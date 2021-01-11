import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function Callback() {
  const location = useLocation();
  const history = useHistory();

  // useEffect(() => {
  //   // after the user has authorized with google
  //   // get the code from the url query
  //   const searchParams = new URLSearchParams(location.search);
  //   const code = searchParams.get('code');

  //   // if a code is returned
  //   if (code) {
  //     // make a call to the api endpoint to exchange the code for the google_id
  //     // using the WAPPrequest
  //     const login = async () => {
  //       const response = await WAPPRequest('/authorize/verify', {
  //         method: 'POST',
  //         body: JSON.stringify({ code }),
  //       });

  //       // we save the google_id to the local storage
  //       // this is their identifier
  //       // and maintains the session
  //       localStorage.setItem('WAPPTOKEN', response);
  //       // then push them to the main page
  //       history.push('/');
  //     };

  //     login();
  //   } else {
  //     // they did not authorize/we did not get a code back and they need to relogin
  //     history.push('/login');
  //   }
  // }, []);

  return null;
}
