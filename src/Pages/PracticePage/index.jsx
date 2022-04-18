import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IdeContainer from '../../components/ide/IdeContainer';
import ProblemContainer from '../../components/ProblemConatiner';
import ProblemListContainers from '../../components/ProblemConatiner/ProblemListContainers';
import './Practice.scss';
import ChatContainer from '../../components/Chat/ChatContainer';
import Layout from '../Layout';

function ProblemRouter() {
  return (
    <Routes>
      <Route path="" element={<ProblemListContainers />} />
      <Route path=":id" element={<ProblemContainer />} />
    </Routes>
  );
}

function Practice() {
  return (
    <div className="Practice">
      <Layout
        TopLeft={<ProblemRouter />}
        BottomLeft={<ChatContainer />}
        BottomRight={<IdeContainer />}
      />
      {/* <div className="left-side">
        <div className="section">
          <
        </div>
        <div className="section">
          <ChatContainer />
        </div>
      </div>
      <div className="right-side">
        <IdeContainer />
      </div> */}
    </div>
  );
}

export default Practice;
