import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Topper.scss';
import SettingContainer from '../../../components/ide/SettingsContainer';
import { logout } from '../../../redux/reducers/auth.reducer';

function Topper() {
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  const profile = useSelector((state) => state.auth.profile);
  const dispatch = useDispatch();
  const [openSetting, setOpenSetting] = useState(false);

  const onLogout = () => {
    dispatch(logout());
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
        {isLogin ? <Link to="/mypage">My Account</Link> : <></>}
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

        {isLogin ? (
          <>
            <span>{profile.username}</span>
            <button onClick={onLogout}>log out</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button>Log in</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Topper;
