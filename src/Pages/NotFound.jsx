import React from 'react';
import { useLocation } from 'react-router-dom';

function NotFound() {
  const { pathname } = useLocation();
  return (
    <div>
      <h1>NotFound Page</h1>
      <p>
        path:
        <span>{pathname}</span>
      </p>
    </div>
  );
}

export default NotFound;
