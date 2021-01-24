import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {

  const auth = localStorage.getItem('OTP_TOKEN');

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
