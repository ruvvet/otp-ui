import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }: RouteProps) {
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
