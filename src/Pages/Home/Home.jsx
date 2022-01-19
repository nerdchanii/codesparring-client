import LeaderBoard from '../../components/leaderboard/Leaderboard';
import Chat from '../Chat/Chat';
import './Home.scss';
import Game from '../Game/Game';

const Home = () => {
  return (
    <div className="Home">
      <div className="Left">
        <div className="Section">
          <LeaderBoard />
        </div>
        <div className="Section">
          <Chat />
        </div>
      </div>
      <div className="Right">
        <div className="Section">
          <Game />
        </div>
      </div>
    </div>
  );
};

export default Home;
