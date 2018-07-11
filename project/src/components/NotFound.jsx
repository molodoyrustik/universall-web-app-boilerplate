import React from 'react';
import { Route } from 'react-router-dom';

function NotFound() {
  return (
    <Route render={() => {
      return (
        <div>
          <h1>404 : Not Found</h1>
        </div>
      );
    }}
    />
  );
}

export default NotFound;
