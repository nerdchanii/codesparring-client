import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SparringPage from '../SparringPage';
import Home from '../Home/Home';
import MyPage from '../MyPage/MyPage';
import PracticePage from '../PracticePage';

import Notice from '../../components/board/NoticeBoard';
import './RouteContainer.scss';
import ProblemPage from '../ProblemPage/ProblemPage';
import LeaderBoardPage from '../LeaderBoardPage/LeaderBoardPage';
import NotFound from '../NotFound';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';

function RouteContainer() {
  return (
    <div className="RouteContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/notice/*" element={<Notice />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
        <Route path="/sparring/*" element={<SparringPage />} />
        <Route path="/practice/*" element={<PracticePage />} />
        <Route path="/mypage/*" element={<MyPage />} />
        <Route path="/problem/*" element={<ProblemPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default RouteContainer;
