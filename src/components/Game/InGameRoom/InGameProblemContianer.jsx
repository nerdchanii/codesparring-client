import React from 'react';
import ProblemBody from '../../Problem/ProblemBody';
import './InGame.scss';

const InGameProblemContianer = ({ data }) => {
  return (
    <div className="InGameProblemContainer">
      <ProblemBody data={data} />
    </div>
  );
};

export default InGameProblemContianer;
