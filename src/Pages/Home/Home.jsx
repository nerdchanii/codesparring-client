import React from 'react';
import Layout from '../Layout';
import LeaderBoard from '../../components/board/LeaderBoard';
import './Home.scss';
import Notice from '../../components/board/NoticeBoard';
import Game from '../../components/Game/Game';

function Home() {
  return (
    <div className="Home">
      <Layout
        TopLeft={<Game />}
        // TopRight={<MyAccount />}
        BottomLeft={<Notice />}
        BottomRight={<LeaderBoard />}
      />
    </div>
  );
}

export default Home;
