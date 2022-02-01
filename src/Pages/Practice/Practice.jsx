import { Route, Routes } from 'react-router-dom';
import IdeContainer from '../../components/ide/IdeContainer';
import ProblemContainer from '../../components/Problem/ProblemContainer';
import ProblemListContainers from '../../components/Problem/ProblemListContainers';
import Chat from '../../components/Chat/Chat';
import './Practice.scss';

const Practice = () => {
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
          <Chat />
        </div>
      </div>
      <div className="right-side">
        <IdeContainer />
      </div>
    </div>
  );
};

export default Practice;
