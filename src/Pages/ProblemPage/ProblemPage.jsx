import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProblemContainer from '../../components/ProblemConatiner';
import ProblemListContainers from '../../components/ProblemConatiner/ProblemListContainers';
import ProblemAdd from './ProblemAdd';
import './index.scss';
import AddButton from './AddButton';
import LoginNeeded from '../../components/LoginNeeded';

function ProblemPage() {
  const [editProblem, setEditProblem] = useState(false);
  const islogin = useSelector((state) => state.auth.isLoggedIn);

  const toggleEditMode = () => {
    setEditProblem(!editProblem);
  };

  if (!islogin) {
    return <LoginNeeded />;
  }

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
