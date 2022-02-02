import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Problem.scss';

function ProblemHeader({ data }) {
  // const { data } = props;
  const { id, title, level } = data;
  const navigate = useNavigate();
  const titleMessage = `${id}. ${title}(lv.${level})`;
  return (
    <div className="ProblemHeader">
      <div className="Problem-title">
        {titleMessage}
      </div>
      <div className="backButton">
        <button
          onClick={() => {
            navigate('/practice');
          }}
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
}
export default ProblemHeader;
