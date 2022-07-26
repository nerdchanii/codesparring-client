import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import SettingContainer from '../../../components/ide/SettingsContainer';
import { logout } from '../../../redux/reducers/auth.reducer';

function Navbar() {
  const [openSetting, setOpenSetting] = React.useState(false);
  const islogin = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="NavigatorContainer">
      <div className="left">
        <a href="https://github.com/nerdchanii/codesparring-client/issues">
          <AiFillGithub />
        </a>
        <Link to="/notice">notice</Link>
        <Link to="/leaderboard">leaderboard</Link>
        <Link to="/sparring">sparring</Link>
        <Link to="/practice">parctice</Link>
        <Link to="/problem">problems</Link>
      </div>
      <div className="right">
        <div className="setting--box">
          <button
            onClick={() => {
              setOpenSetting(true);
            }}
          >
            <IoSettingsOutline />
          </button>
          {openSetting && <SettingContainer className="popup" setshowing={setOpenSetting} />}
        </div>
        {islogin ? (
          <>
            <button>
              <Link to="/mypage">MyAccount</Link>
            </button>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <button className="textbutton">
              <Link to="/login">Login</Link>
            </button>
            <button className="textbutton">
              <Link to="/signup">Signup</Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
export default memo(Navbar);
