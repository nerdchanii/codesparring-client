import { Route, Routes } from 'react-router-dom';
import Chat from '../../Pages/Chat/Chat';
import Game from '../../Pages/Game/Game';
import Home from '../../Pages/Home/Home';
import MyAccount from '../../Pages/MyAccount';
import Practice from '../../Pages/Practice/Practice';
import LeaderBoard from '../leaderboard/Leaderboard';
import './RouteContainer.scss';
const RouteContainer = () => {
  return (
    <div className="RouteContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard/*" element={<LeaderBoard />} />
        <Route path="/chat/*" element={<Chat />} />
        <Route path="/practice/*" element={<Practice />} />
        <Route path="/sparring/*" element={<Game />} />
        <Route path="/muaccount/*" element={<MyAccount />} />
      </Routes>
    </div>
  );
};
export default RouteContainer;
