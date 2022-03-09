import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import MyAccount from '../../components/MyAccount/MyAccount';
import LOGIN_STATE from '../../state/login';
import LeaveAccount from './LeaveAccount';
import './MyPage.scss';

function MyPage() {
  const login = useRecoilValue(LOGIN_STATE);
  useEffect(() => {
    if (!login) alert('잘못된 접근입니다!');
  }, [login]);

  if (!login) {
    return <Navigate to="/" />;
  }
  return (
    <div className="MyPage">
      <MyAccount />
      <LeaveAccount />
    </div>
  );
}

export default MyPage;
