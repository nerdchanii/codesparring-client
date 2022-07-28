import React from 'react';
import './MyPage.scss';
import { BiBlock } from 'react-icons/bi';

function LeaveAccount({ onClickQuit }) {
  return (
    <div className="leave-account--container">
      <button onClick={onClickQuit} className="button warning">
        <BiBlock />
        <span>탈퇴하기</span>
      </button>
    </div>
  );
}

export default LeaveAccount;
