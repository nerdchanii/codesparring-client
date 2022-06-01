import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProblems } from '../../redux/reducers/problems.reducer';
import ProblemBoard from '../board/ProblemBoard';
import './Problem.scss';

function ProblemListCotainers() {
  const problemItems = useSelector((state) => state.problems.problems);
  const dispatch = useDispatch();

  const fetchData = useCallback(() => {
    dispatch(getProblems());
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (!problemItems?.length) {
    return <></>;
  }

  return <ProblemBoard className="ProblemList" title="문제목록" data={problemItems} />;
}

export default memo(ProblemListCotainers);
