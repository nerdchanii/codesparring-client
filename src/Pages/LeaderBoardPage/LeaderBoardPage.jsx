import React from 'react';
import LeaderBoard from '../../components/board/LeaderBoard';
import Layout from '../Layout';

function LeaderBoardPage() {
  return (
    <div>
      <Layout TopLeft={<LeaderBoard />} />
    </div>
  );
}

export default LeaderBoardPage;
