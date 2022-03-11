import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IdeContainer from '../../components/ide/IdeContainer';
import ProblemContainer from '../../components/Problem/ProblemContainer';
import ProblemListContainers from '../../components/Problem/ProblemListContainers';
import './Practice.scss';
import ChatContainer from '../../components/Chat/ChatContainer';

function Practice() {
  return (
    <div className="Practice">
      <div className="left-side">
        <div className="section">
          <Routes>
            <Route path="" element={<ProblemListContainers />} />
            <Route path=":id" element={<ProblemContainer />} />
          </Routes>
        </div>
        <div className="section">
          <ChatContainer />
        </div>
      </div>
      <div className="right-side">
        <IdeContainer />
      </div>
    </div>
  );
}

export default Practice;
