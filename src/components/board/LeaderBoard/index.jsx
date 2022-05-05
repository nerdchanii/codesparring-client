import axios from 'axios';
import React, { useEffect } from 'react';
import LeaderBoardPresentation from './LeaderBoardPresetation';

function LeaderBoard() {
  const [rankList, setRankList] = React.useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios(`${process.env.REACT_APP_API_DEFAULTS_URL}/user/rank`);
      const { data } = response;
      setRankList(data);
    })();
  }, []);

  if (!rankList?.length) {
    return <></>;
  }
  return <LeaderBoardPresentation className="LeaderBoard" title="랭킹" data={rankList} />;
}

export default LeaderBoard;
