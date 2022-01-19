import { Route, Routes } from 'react-router-dom';
import IdeContainer from '../../components/ide/IdeContainer';
import ProblemContainer from '../../components/Problem/ProblemContainer';
import ProblemListContainers from '../../components/Problem/ProblemListContainers';
import Chat from '../Chat/Chat';
import './Practice.scss';

const Practice = () => {
  return (
    <div className="Practice">
      <div className="left-side">
        <div className="section">
          <Routes>
            {/*  path가 /parctice이면, 내부라우팅은 /practice/1 /practice/:1 둘중하나에는 동작해야하는거 어니냐구 */}
            <Route path="" element={<ProblemListContainers />} />
            <Route path=":param" element={<ProblemContainer />} />
            {/* </Route> */}
            {/* <Route path="/" element={<ProblemListContainers />}> */}
            {/* {/* <Route path=":problemNumber" element={<Problem />} /> */}
            {/* </Route>  */}
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
