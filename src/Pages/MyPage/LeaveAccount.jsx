import React, { useCallback } from 'react';
import { Button } from '@mui/material';
import { BiBlock } from 'react-icons/bi';
// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../redux/reducers/user.reducer';

function LeaveAccount() {
  // const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();

  const onClickQuit = useCallback(() => {
    const result = dispatch(removeUser({ userId }));
    console.log(result);
  }, [userId]);

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
