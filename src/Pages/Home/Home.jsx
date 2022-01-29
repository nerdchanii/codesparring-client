import LeaderBoard from '../../components/leaderboard/Leaderboard';
import './Home.scss';
import Notice from '../../components/Notice/Notice';
import MyAccount from '../../components/MyAccount/MyAccount';
import Game from '../../components/Game/Game';
const Home = () => {
  return (
    <div className="Home">
      <div className="Left">
        <div className="Section">
          <LeaderBoard />
        </div>
        <div className="Section">
          <MyAccount />
        </div>
      </div>
      <div className="Right">
        <div className="Section">
          <Game />
        </div>
        <div className="Section">
          <Notice />
        </div>
      </div>
    </div>
  );
};

export default Home;
