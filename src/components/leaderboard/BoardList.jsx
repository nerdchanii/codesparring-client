import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { loadding } from '../../state/loading';
import './BoardListItem.scss';
import BoardListHeader from './BoardListHeader';
import env from '../../env';

// POW = Prolbem of Week
function BoardListItem(props) {
  const { ranking, nickName, point, POW } = props;

  return (
    <li className="BoardListItem">
      <div className="Ranking">{ranking}</div>
      <div className="NickName">{nickName}</div>
      <div className="point">{point}</div>
      <div className="POW">{POW}</div>
    </li>
  );
}

function BoardList() {
  // const { LeaderBoard } = loadding;
  // api로 뱅열 만만들들어내야함
  const [rankLoadding, setRankLoadding] = useRecoilState(loadding);
  const [rankList, setRankList] = useState(null);
  const fetchData = useCallback(async () => {
    const response = await axios(`${env.API_URL}/api/ranklist`);
    const { data } = response;
    setRankList(data);
  }, []);

  useEffect(() => {
    setRankLoadding(true);
    try {
      fetchData();
    } catch (e) {
      console.log(e);
    } finally {
      setRankLoadding(false);
    }
  }, []);

  if (rankLoadding) {
    return <h1>...loadding</h1>;
  }
  if (!rankList) {
    return <h1>정보가 없습니다</h1>;
  }
  return (
    <>
      <BoardListHeader />
      <ul className="BoardList">
        {rankList.map((user) => (
          <BoardListItem
            ranking={user.id}
            nickName={user.nickName}
            point={user.point}
            POW={user.POW}
            key={user.id}
          />
        ))}
      </ul>
    </>
  );
}

export default BoardList;
