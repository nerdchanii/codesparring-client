import React from 'react';
import './Problem.scss';

function ProblemHeader({ data, backButton }) {
  const { id, title, level } = data;

  const titleMessage = `${id}. ${title}(lv.${level})`;
  return (
    <div className="ProblemHeader">
      <div className="Problem-title">{titleMessage}</div>
      <button className="backButton" onClick={backButton}>
        뒤로가기
      </button>
    </div>
  );
}
export default ProblemHeader;
