import React from 'react';
import '../Game.scss';
import { useNavigate } from 'react-router-dom';

const InGameHeader = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/sparring')}>나가기</button>
    </div>
  );
};

export default InGameHeader;
