import React from 'react';
import { Link } from 'react-router-dom';
import welcomImage from '../images/welcome.png';
import Title from './design/Title';
import './WelcomePage.scss';

function WelcomePage() {
  const isLogin = !!localStorage.getItem('auth');

  return (
    <div className="welcompage">
      <div className="image--container">
        <img src={welcomImage} alt="welcome" loading="lazy" />
      </div>
      <div className="welcome-container">
        <div className="welcome--title">
          <h1 className="title">Welcome to Code-Sparring</h1>
        </div>
        <div className="welcome--content">
          <Title>코드스파링에서 친구들과 함께 경쟁하며 코딩 문제를 풀어보세요.</Title>
        </div>
        <div className="welcome--button">
          {!isLogin && (
            <>
              <Link className="button primary" to="/login">
                로그인
              </Link>
              <Link className="button outline" to="/signup">
                회원가입
              </Link>
            </>
          )}
          {isLogin && (
            <>
              <Link className="button primary" to="/home">
                게임하러가기
              </Link>
              <Link className="button outline" to="/practice">
                연습하러가기
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
