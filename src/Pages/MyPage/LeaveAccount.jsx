import { Button } from '@mui/material';
import { BiBlock } from 'react-icons/bi';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import LOGIN_STATE from '../../state/login';
import env from '../../env';

function LeaveAccount() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const setLogin = useSetRecoilState(LOGIN_STATE);
  const onClickQuit = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('LOGIN_TOKEN');
      const response = await axios.delete(`${env.API_URL}/delete/user`, {
        headers: { Authorization: `${token}` },
      });

      if (response.data.result === true) {
        alert('탈퇴가 완료되었습니다.');
        setLogin(false);
        localStorage.clear();
        navigate('/', { replace: true });
      }
    } catch (e) {
      alert('에러가 발생했습니다. 다시 시도해주세요');
    } finally {
      setLoading(false);
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <div>
      <Button
        startIcon={<BiBlock />}
        size="large"
        variant="outlined"
        sx={{ color: '#2f9272' }}
        onClick={onClickQuit}
        disabled={loading}
      >
        탈퇴하기
      </Button>
    </div>
  );
}

export default LeaveAccount;
