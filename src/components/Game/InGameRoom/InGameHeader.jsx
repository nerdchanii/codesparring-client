import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './InGame.scss';

const InGameHeader = (props) => {
  const { title, level } = props;
  const navigate = useNavigate();
  return (
    <div className="InGameHeader">
      <div className="title">
        {title}(lv.{level})
      </div>
      <Button onClick={() => navigate('/sparring')}>나가기</Button>
    </div>
  );
};

export default InGameHeader;
