import React from 'react';
import './loginNeeded.scss';
import { Link } from 'react-router-dom';
import Title from './design/Title';

function LoginNeeded() {
  return (
    <div className="LoginNeeded--wrapper">
      <Title className="header">로그인이 필요합니다.</Title>
      <div>
        <p>회원이라면?</p>
        <Link className="button tertiary" to="/login">
          로그인
        </Link>
      </div>
      <div>
        <p>아직 회원이 아니라면?</p>
        <Link className="button tertiary" to="/signup">
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default LoginNeeded;
