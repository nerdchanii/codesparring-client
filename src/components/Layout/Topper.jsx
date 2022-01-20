import React from 'react';
import { Link } from 'react-router-dom';
import { isLogin } from '../../state/login';
import { useRecoilValue } from 'recoil';
import './Topper.scss';

const Topper = () => {
  const logInState = useRecoilValue(isLogin);

  return (
    <div className="Topper">
      <h1>
        <Link to="/">codesparring</Link>
      </h1>
      <nav>
        <Link to="/notice">Notice</Link>
        <Link to="/leaderboard">LeaderBoard</Link>
        <Link to="/sparring">Sparring</Link>
        <Link to="/practice">Practice</Link>
        <button
          onClick={() => {
            console.log('click');
          }}
        >
          Settings
        </button>
        {logInState ? (
          <Link to="/muaccount">My Account</Link>
        ) : (
          <button
            onClick={() => {
              console.log('click');
            }}
          >
            Login
          </button>
        )}
      </nav>
    </div>
  );
};

export default Topper;
