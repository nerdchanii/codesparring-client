import React from 'react';
import ProblemList from './ProblemList';
import './Problem.scss';

function ProblemListCotainers() {
  return (
    <div className="ProblemListContainers">
      <div className="section-title">Problem List</div>
      <div className="section-ProblemList">
        <ProblemList />
      </div>
    </div>
  );
}

export default ProblemListCotainers;
