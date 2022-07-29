import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiOutlineSetting } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import SettingContainer from '../../../components/ide/SettingsContainer';

function Navbar() {
  const [openSetting, setOpenSetting] = React.useState(false);
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  const toggleSettingVisible = () => {
    setOpenSetting(!openSetting);
  };
  if (isLogin) {
    return (
      <nav className="navbar">
        <div className="navbar--left">
          <a href="https://github.com/nerdchanii/codesparring-client/issues">
            <AiFillGithub />
          </a>
          <Link className="button tertiary" to="/notice">
            공지
          </Link>
          <Link className="button tertiary" to="/leaderboard">
            랭킹
          </Link>
          <Link className="button tertiary" to="/sparring">
            게임
          </Link>
          <Link className="button tertiary" to="/practice">
            연습
          </Link>
          <Link className="button tertiary" to="/problem">
            문제
          </Link>
        </div>
        <div className="navbar--right">
          <Link className="button tertiary" to="/mypage">
            내 정보
          </Link>
          <Link className="button tertiary" to="/logout">
            로그아웃
          </Link>
          <div className="setting--box">
            <button
              className="circle tertiary"
              onClick={() => {
                setOpenSetting(true);
              }}
            >
              <AiOutlineSetting />
            </button>
            {openSetting && <SettingContainer className="popup" setshowing={setOpenSetting} />}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <div className="navbar--left">
        <a href="https://github.com/nerdchanii/codesparring-client/issues">
          <AiFillGithub />
        </a>
        <Link className="button tertiary" to="/notice">
          공지
        </Link>
        <Link className="button tertiary" to="/leaderboard">
          랭킹
        </Link>
        <Link className="button tertiary" to="/sparring">
          게임판
        </Link>
        <Link className="button tertiary" to="/practice">
          연습장
        </Link>
        <Link className="button tertiary" to="/problem">
          문제
        </Link>
      </div>
      <div className="navbar--right">
        <Link className="button primary" to="/login">
          로그인
        </Link>
        <Link className="button outline" to="/signup">
          회원가입
        </Link>
        <div className="setting--box">
          <button className="circle tertiary" onClick={toggleSettingVisible}>
            <AiOutlineSetting />
          </button>
          {openSetting && <SettingContainer className="popup" setshowing={setOpenSetting} />}
        </div>
      </div>
    </nav>
  );
}
export default memo(Navbar);
