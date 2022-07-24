import React, { memo, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { emitJoin, emitLeave, DEFAULT_ROOM_ID } from '../../redux/reducers/room.reducer';
import IdeContainer from '../../components/ide/IdeContainer';
import ProblemContainer from '../../components/ProblemConatiner';
import ProblemListContainers from '../../components/ProblemConatiner/ProblemListContainers';
import './Practice.scss';
import ChatContainer from '../../components/Chat/ChatContainer';
import Layout from '../Layout';
import LoginNeeded from '../../components/LoginNeeded';

function ProblemRouter() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emitJoin({ id: DEFAULT_ROOM_ID }));
    return () => {
      dispatch(emitLeave({ id: DEFAULT_ROOM_ID }));
    };
  }, []);

  return (
    <Routes>
      <Route path="" element={<ProblemListContainers />} />
      <Route path=":id" element={<ProblemContainer />} />
    </Routes>
  );
}

function Practice() {
  const islogin = useSelector((state) => state.auth.isLoggedIn);
  if (!islogin) {
    return <LoginNeeded />;
  }
  return (
    <div className="Practice">
      <Layout
        TopLeft={<ProblemRouter />}
        BottomLeft={<ChatContainer />}
        TopRight={<IdeContainer />}
      />
    </div>
  );
}

export default memo(Practice);
