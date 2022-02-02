import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLogin } from '../../state/login';
import './Topper.scss';
import LoginBoxContainer from './Topper/LoginBoxContainer';
import SettingContainer from '../ide/SettingsContainer';

function Topper() {
  const [loginState, setLoginState] = useRecoilState(isLogin);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);

  const onLogout = () => {
    setLoginState(false);
  };
  const onClickLogin = () => {
    if (loginState !== false) {
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
      <nav className="NavigatorContainer">
        <Link to="/notice">Notice</Link>
        <Link to="/leaderboard">LeaderBoard</Link>
        <Link to="/sparring">Sparring</Link>
        <Link to="/practice">Practice</Link>
        {loginState ? <Link to="/mypage">My Account</Link> : <></>}
      </nav>
      <div className="ButtonContainer">
        <button
          onClick={() => {
            setOpenSetting(true);
          }}
        >
          settings
        </button>
        {openSetting ? <SettingContainer setshowing={setOpenSetting} /> : <></>}

        {loginState ? (
          <button onClick={onLogout}>log out</button>
        ) : (
          <button onClick={onClickLogin}>Log in</button>
        )}

        {showLoginModal ? <LoginBoxContainer click={toggleShowLoginModal} /> : <></>}
      </div>
    </div>
  );
}

export default Topper;
