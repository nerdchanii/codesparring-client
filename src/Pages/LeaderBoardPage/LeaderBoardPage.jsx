import axios from 'axios';
import React, { useEffect } from 'react';
import Board from '../../components/Board';

function LeaderBoardPage() {
  const [rankList, setRankList] = React.useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios(`${process.env.REACT_APP_API_DEFAULTS_URL}/user/rank`);
      const { data } = response;
      setRankList(data);
    })();
  }, []);

  return rankList.length === 0 ? (
    <></>
  ) : (
    <div style={{ width: '90%', height: 'inherit', margin: 'auto' }}>
      <Board className="leaderBoard" title="리더보드" data={rankList} />
    </div>
  );
}

export default LeaderBoardPage;
