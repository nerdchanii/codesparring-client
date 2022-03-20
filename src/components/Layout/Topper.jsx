import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import LOGIN_STATE from '../../state/login';
import './Topper.scss';
import LoginBoxContainer from './Topper/LoginBoxContainer';
import SettingContainer from '../ide/SettingsContainer';

function Topper() {
  const [loginState, setLoginState] = useRecoilState(LOGIN_STATE);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);

  const onLogout = () => {
    localStorage.removeItem('LOGIN_TOKEN');
    setLoginState(false);
  };
  const onClickLogin = () => {
    if (!loginState) {
      setShowLoginModal(true);
    } else {
      console.log('err');
      throw Error;
    }
  };

  const toggleShowLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };
  return (
    <header className="Topper">
      <h1>
        <Link to="/">codesparring</Link>
      </h1>
      <nav className="NavigatorContainer">
        <a href="https://github.com/nerdchanii/codesparring-client/issues">Github issue</a>
        <a href="mailto:nerdchanii@gmail.com">리뷰메일</a>
        <Link to="/notice">Notice</Link>
        <Link to="/leaderboard">LeaderBoard</Link>
        <Link to="/sparring">Sparring</Link>
        <Link to="/practice">Practice</Link>
        <Link to="/problem">Problem</Link>
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
    </header>
  );
}

export default Topper;
