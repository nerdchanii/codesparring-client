import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import MyAccount from '../../components/MyAccount/MyAccount';
import LeaveAccount from './LeaveAccount';
import './MyPage.scss';

function MyPage() {
  const login = useSelector((state) => state.auth.isLoggedIn);

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
