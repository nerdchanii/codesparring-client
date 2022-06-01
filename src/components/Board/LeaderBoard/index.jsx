import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderBoardPresenter from './LeaderBoardPresenter';
import { getRanks } from '../../../redux/reducers/user.reducer';

function LeaderBoard() {
  const rankList = useSelector((state) => state.user.userRanks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRanks());
  }, []);

  if (!rankList?.length) {
    return <></>;
  }
  return <LeaderBoardPresenter className="LeaderBoard" title="랭킹" data={rankList} />;
}

export default LeaderBoard;
