import React, { useCallback, useEffect } from 'react';
import './Problem.scss';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ProblemHeader from './ProblemHeader';
import ProblemBody from './ProblemBody';
import { getProblem } from '../../redux/reducers/problem.reducer';

function ProblemContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const problem = useSelector((state) => state.problem);
  const fetchData = useCallback(() => {
    dispatch(getProblem({ id }));
  }, [id]);

  useEffect(() => {
    fetchData();
  }, []);

  if (problem.id === null) {
    return (
      <div>
        <div
          style={{
            display: 'block',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItem: 'center',
          }}
        >
          <CircularProgress sx={{ color: '#2f9272' }} />
        </div>
      </div>
    );
  }
  return (
    <div className="ProblemContainer">
      <ProblemHeader data={problem} />
      <ProblemBody data={problem} />
    </div>
  );
}

export default ProblemContainer;
