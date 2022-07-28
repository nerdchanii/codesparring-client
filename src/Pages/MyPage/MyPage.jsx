import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/design/Title';
import LoginNeeded from '../../components/LoginNeeded';
import UserProfile from '../../components/MyAccount/UserProfile';
import { removeUser } from '../../redux/reducers/user.reducer';
import LeaveAccount from './LeaveAccount';
import './MyPage.scss';

function MyPage() {
  const { isLoggedIn: islogin, userId, profile } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onClickQuit = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('정말 탈퇴하시겠습니까?')) {
      dispatch(removeUser({ userId }));
    }
  }, [userId]);

  if (!islogin) {
    return <LoginNeeded />;
  }

  return (
    <div className="page mypage">
      <div className="myaccount">
        <div className="myaccount-topper">
          <Title>My Account</Title>
        </div>
        <div className="myaccount-body">
          <UserProfile email={profile.email} username={profile.username} />
          <LeaveAccount onClickQuit={onClickQuit} />
        </div>
      </div>
    </div>
  );
}

export default memo(MyPage);
