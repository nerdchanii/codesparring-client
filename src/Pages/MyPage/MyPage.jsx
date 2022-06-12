import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MyAccount from '../../components/MyAccount/MyAccount';
import MESSAGE from '../../config/message';
import LeaveAccount from './LeaveAccount';
import './MyPage.scss';

function MyPage() {
  const login = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const { LOGIN_NEEDED } = MESSAGE;
  useEffect(() => {
    if (!login) {
      alert(LOGIN_NEEDED);
      navigate('/login');
    }
  }, [login, navigate]);

  return (
    <div className="MyPage">
      <MyAccount />
      <LeaveAccount />
    </div>
  );
}

export default MyPage;
