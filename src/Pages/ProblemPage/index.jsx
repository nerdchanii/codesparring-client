import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProblemContainer from '../../components/Problem/ProblemContainer';
import ProblemListContainers from '../../components/Problem/ProblemListContainers';
import ProblemAdd from './ProblemAdd';
import './index.scss';

function index() {
  const [editProblem, setEditProblem] = useState(false);

  const toggleEditMode = () => {
    setEditProblem(!editProblem);
  };

  if (editProblem) {
    return (
      <div className="ProblemPage">
        <ProblemAdd back={toggleEditMode} />
      </div>
    );
  }

  if (!editProblem) {
    return (
      <div className="ProblemPage">
        <div className="AddButtonContainer">
          <button className="AddButton" onClick={toggleEditMode}>
            문제 등록하기
          </button>
        </div>
        <Routes>
          <Route path="" element={<ProblemListContainers />} />
          <Route path=":id" element={<ProblemContainer />} />
        </Routes>
      </div>
    );
  }
}

export default index;
