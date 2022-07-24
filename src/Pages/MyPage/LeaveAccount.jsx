import React from 'react';
import { Button } from '@mui/material';
import { BiBlock } from 'react-icons/bi';

function LeaveAccount({ onClickQuit }) {
  return (
    <div>
      <Button
        startIcon={<BiBlock />}
        size="large"
        variant="outlined"
        sx={{ color: '#2f9272' }}
        onClick={onClickQuit}
      >
        탈퇴하기
      </Button>
    </div>
  );
}

export default LeaveAccount;
