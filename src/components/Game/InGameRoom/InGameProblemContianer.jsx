import React from 'react';
import ProblemBody from '../../ProblemConatiner/ProblemBody';
import './InGame.scss';

function InGameProblemContianer({ data }) {
  return (
    <div className="InGameProblemContainer">
      <ProblemBody data={data} />
    </div>
  );
}

export default InGameProblemContianer;
