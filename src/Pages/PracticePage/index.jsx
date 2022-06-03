import React, { memo, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { emitJoin, emitLeave, DEFAULT_ROOM_ID } from '../../redux/reducers/room.reducer';
import IdeContainer from '../../components/ide/IdeContainer';
import ProblemContainer from '../../components/ProblemConatiner';
import ProblemListContainers from '../../components/ProblemConatiner/ProblemListContainers';
import './Practice.scss';
import ChatContainer from '../../components/Chat/ChatContainer';
import Layout from '../Layout';

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
