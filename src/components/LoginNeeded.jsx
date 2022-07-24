import React from 'react';
import './loginNeeded.scss';
import { Link } from 'react-router-dom';

function LoginNeeded() {
  return (
    <div className="LoginNeeded--wrapper">
      <h1 className="title">로그인이 필요합니다.</h1>
      <div>
        <p>회원이라면?</p>
        <button>
          <Link to="/login">로그인하러가기</Link>
        </button>
      </div>
      <div>
        <p>아직 회원이 아니라면?</p>
        <button>
          <Link to="/signup">회원가입하러가기</Link>
        </button>
      </div>
    </div>
  );
}

export default LoginNeeded;
