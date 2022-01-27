import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { isLogin } from '../../state/login';
import { useRecoilValue } from 'recoil';
import './Topper.scss';
import LoginBoxContainer from './Topper/LoginBoxContainer';

const Topper = () => {
  const logInState = useRecoilValue(isLogin);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const onClickLogin = () => {
    if (logInState !== false) {
      console.log('err');
      throw Error;
    } else {
      setShowLoginModal(true);
    }
  };

  const toggleShowLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };
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
          <Link to="/mypage">My Account</Link>
        ) : (
          <button onClick={onClickLogin}>Login</button>
        )}

        {showLoginModal ? (
          <LoginBoxContainer click={toggleShowLoginModal} />
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default Topper;
