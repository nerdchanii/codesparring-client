import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import MyAccountHeader from './MyAccountHeader';
import UserProfile from './UserProfile';
import './MyAccount.scss';
import LOGIN_STATE from '../../state/login';
import env from '../../env';

function MyAccount() {
  const loginCheck = useRecoilValue(LOGIN_STATE);
  const { pathname } = useLocation();
  const [user, setUser] = useState(null);

  const fetchUser = useCallback(async () => {
    // TOO AccessToken 을 이용해서 조회할 수 있어야 하지 않을까 생각됨
    // Acees token으로 식별자 받아서 해야하나?
    const accessToken = localStorage.getItem('com.naver.nid.access_token');
    try {
      const response = await axios.get(`${env.API_URL}/api/user?token=${accessToken}`);
      const data = JSON.parse(response.data);
      setUser(data);
    } catch (e) {
      console.log(e); // 비동기처리중 에러 발생시
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
        <UserProfile user={user} />
      </div>
    </div>
  );
}

export default MyAccount;
