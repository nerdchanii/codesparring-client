import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Problem.scss';

function ProblemHeader({ data }) {
  const { id, title, level } = data;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = pathname.split('/')[1];

  const titleMessage = `${id}. ${title}(lv.${level})`;
  return (
    <div className="ProblemHeader">
      <div className="Problem-title">{titleMessage}</div>
      <div className="backButton">
        <button
          onClick={() => {
            navigate(`/${path}`);
          }}
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
}
export default ProblemHeader;
