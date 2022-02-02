import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sparring from '../../Pages/Sparring/Sparring';
import Home from '../../Pages/Home/Home';
import MyPage from '../../Pages/MyPage/MyPage';
import Practice from '../../Pages/Practice/Practice';
import LeaderBoard from '../leaderboard/Leaderboard';
import Notice from '../Notice/Notice';
import './RouteContainer.scss';

function RouteContainer() {
  return (
    <div className="RouteContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notice/*" element={<Notice />} />
        <Route path="/leaderboard/*" element={<LeaderBoard />} />
        <Route path="/sparring/*" element={<Sparring />} />
        <Route path="/practice/*" element={<Practice />} />
        <Route path="/mypage/*" element={<MyPage />} />
      </Routes>
    </div>
  );
}
export default RouteContainer;
