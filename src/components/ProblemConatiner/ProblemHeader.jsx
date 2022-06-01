import React from 'react';
import './Problem.scss';

function ProblemHeader({ data }) {
  const { id, title, level } = data;

  const titleMessage = `${id}. ${title}(lv.${level})`;
  return (
    <div className="ProblemHeader">
      <div className="Problem-title">{titleMessage}</div>
    </div>
  );
}
export default ProblemHeader;
