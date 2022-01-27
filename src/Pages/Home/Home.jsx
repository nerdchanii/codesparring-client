import LeaderBoard from '../../components/leaderboard/Leaderboard';
import Chat from '../Chat/Chat';
import './Home.scss';
import Sparring from '../Sparring/Sparring';
import Notice from '../../components/Notice/Notice';
import MyAccount from '../../components/MyAccount/MyAccount';
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
          <Sparring />
        </div>
        <div className="Section">
          <Notice />
        </div>
      </div>
    </div>
  );
};

export default Home;
