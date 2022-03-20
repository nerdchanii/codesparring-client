import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import MyAccountHeader from './MyAccountHeader';
import UserProfile from './UserProfile';
import './MyAccount.scss';
import LOGIN_STATE from '../../state/login';

function MyAccount() {
  const [loginCheck, setLogin] = useRecoilState(LOGIN_STATE);
  const { pathname } = useLocation();
  const [user, setUser] = useState(null);

  const fetchUser = useCallback(async () => {
    const accessToken = localStorage?.LOGIN_TOKEN;
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_DEFAULTS_URL}/user/profile`, {
        headers: { Authorization: `${accessToken}` },
      });
      setUser(response.data);
    } catch (e) {
      switch (e.response.status) {
        case 401:
          alert('토큰이 만료되었습니다. 다시 로그인해주세요');
          localStorage.removeItem('LOGIN_TOKEN');
          setLogin(false);
          break;
        default:
          alert('에러가 발생했습니다. 다시 시도해주세요');
          break;
      }
    }
  }, []);

  useEffect(() => {
    console.log(pathname);
    if (loginCheck) {
      fetchUser();
    }
  }, [pathname, loginCheck]);

  return (
    <div className="MyAccount">
      <div className="MyAccount-Topper">
        <MyAccountHeader />
      </div>
      <div className="MyAccount-Body">
        {user && <UserProfile user={user} />}
        {!user && <div>다시 로그인해주세요!</div>}
      </div>
    </div>
  );
}

export default MyAccount;
