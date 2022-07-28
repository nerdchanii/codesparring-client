import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './Topper.scss';
import Navbar from './Navbar';

function Topper() {
  return (
    <header className="topper">
      <div className="sitename">
        <Link to="/">codesparring</Link>
      </div>
      <Navbar />
    </header>
  );
}

export default memo(Topper);
