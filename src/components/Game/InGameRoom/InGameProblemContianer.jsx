import React from 'react';
import ProblemBody from '../../Problem/ProblemBody';
import './InGame.scss';

const InGameProblemContianer = ({ data }) => {
  return (
    <div>
      <ProblemBody data={data} />
    </div>
  );
};

export default InGameProblemContianer;
