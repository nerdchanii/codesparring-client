import React from 'react';
import LeaderBoard from '../../components/board/LeaderBoard';
import './Home.scss';
import Notice from '../../components/board/NoticeBoard';
import Game from '../../components/Game/Game';
import Layout from '../Layout';

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
