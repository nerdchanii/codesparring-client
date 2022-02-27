import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProblemContainer from '../../components/Problem/ProblemContainer';
import ProblemListContainers from '../../components/Problem/ProblemListContainers';
import ProblemAdd from './ProblemAdd';
import './index.scss';
import AddButton from './AddButton';

function ProblemPage() {
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
        <AddButton buttonClick={toggleEditMode} />

        <Routes>
          <Route path="" element={<ProblemListContainers />} />
          <Route path=":id" element={<ProblemContainer />} />
        </Routes>
      </div>
    );
  }
}

export default ProblemPage;
