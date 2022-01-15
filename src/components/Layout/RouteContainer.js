import { Route, Routes } from 'react-router-dom';
import Chat from '../../Pages/Chat/Chat';
import Home from '../../Pages/Home';
import LeaderBoard from '../leaderboard/Leaderboard';
import './RouteContainer.scss';
const RouteContainer = () => {
  return (
    <div className="RouteContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/practice" element={'Practice'} />
        <Route path="/sparring" element={'Practice'} />
        <Route path="/muaccount" element={'MyAccount'} />
      </Routes>
    </div>
  );
};
export default RouteContainer;
