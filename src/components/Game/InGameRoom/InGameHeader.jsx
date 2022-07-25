import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InGame.scss';

function InGameHeader(props) {
  const { title } = props;
  const navigate = useNavigate();
  return (
    <div className="InGameHeader">
      <div className="title">{title}</div>
      <button onClick={() => navigate('/sparring')}>나가기</button>
    </div>
  );
}

export default InGameHeader;
