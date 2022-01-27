import React, { useCallback, useState, useEffect } from 'react';
import MyAccountHeader from './MyAccountHeader';
import UserProfile from './UserProfile';
import { useLocation } from 'react-router-dom';
import './MyAccount.scss';
import { useRecoilValue } from 'recoil';
import { isLogin } from '../../state/login';
const MyAccount = () => {
  const loginCheck = useRecoilValue(isLogin);
  const { pathname } = useLocation();
  const [user, setUser] = useState(null);

  const fetchUser = useCallback(async () => {
    const mock = {
      img: 'https://via.placeholder.com/400',
      nickName: '너드챠니',
      rank: 5,
      email: 'email@knou.ac.kr',
      points: 125,
    };
    const response = await Promise.resolve(mock);
    setUser(response);
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
