import React, { useCallback, useState, useEffect } from 'react';
import MyAccountHeader from './MyAccountHeader';
import UserProfile from './UserProfile';
import { useLocation } from 'react-router-dom';
import './MyAccount.scss';
import { useRecoilValue } from 'recoil';
import { isLogin } from '../../state/login';
import axios from 'axios';

const MyAccount = () => {
  const loginCheck = useRecoilValue(isLogin);
  const { pathname } = useLocation();
  const [user, setUser] = useState(null);

  const fetchUser = useCallback(async () => {
    //TOO AccessToken 을 이용해서 조회할 수 있어야 하지 않을까 생각됨
    //Acees token으로 식별자 받아서 해야하나?
    const access_token = localStorage.getItem('com.naver.nid.access_token');
    try {
      const response = await axios.get(`/api/user?token=${access_token}`);
      const data = JSON.parse(response.data);
      setUser(data);
    } catch (e) {
      console.log(e); //비동기처리중 에러 발생시
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
};

export default MyAccount;
