import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './Topper.scss';
import Navbar from './Navbar';

function Topper() {
  return (
    <header className="Topper">
      <h1>
        <Link to="/">codesparring</Link>
      </h1>
      <Navbar />
    </header>
  );
}

export default memo(Topper);
