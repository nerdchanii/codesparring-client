import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import IdeContainer from '../../components/ide/IdeContainer';
import Game from '../../components/Game/Game';
import './Sparring.scss';
import Layout from '../Layout';
import LoginNeeded from '../../components/LoginNeeded';

function Sparring() {
  const islogin = useSelector((state) => state.auth.isLoggedIn);
  if (!islogin) {
    return <LoginNeeded />;
  }
  return (
    <div className="Sparring">
      <Layout TopLeft={<Game />} TopRight={<IdeContainer />} />
    </div>
  );
}
export default memo(Sparring);
