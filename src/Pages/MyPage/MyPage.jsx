import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginNeeded from '../../components/LoginNeeded';
import MyAccount from '../../components/MyAccount/MyAccount';
import { removeUser } from '../../redux/reducers/user.reducer';
import LeaveAccount from './LeaveAccount';
import './MyPage.scss';

function MyPage() {
  const { isLoggedIn: islogin, userId } = useSelector((state) => state.auth);
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
    <div className="MyPage">
      <MyAccount />
      <LeaveAccount onClickQuit={onClickQuit} />
    </div>
  );
}

export default memo(MyPage);
