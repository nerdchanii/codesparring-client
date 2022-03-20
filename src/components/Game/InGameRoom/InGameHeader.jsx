import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './InGame.scss';

function InGameHeader(props) {
  const { title } = props;
  const navigate = useNavigate();
  return (
    <div className="InGameHeader">
      <div className="title">{title}</div>
      <Button onClick={() => navigate('/sparring')}>나가기</Button>
    </div>
  );
}

export default InGameHeader;
