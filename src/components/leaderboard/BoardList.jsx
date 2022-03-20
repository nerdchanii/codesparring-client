import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { loadding } from '../../state/loading';
import './BoardListItem.scss';
import BoardListHeader from './BoardListHeader';

// POW = Prolbem of Week
function BoardListItem(props) {
  const { ranking, nickName, point } = props;

  return (
    <li className="BoardListItem">
      <div className="Ranking">{ranking}</div>
      <div className="NickName">{nickName}</div>
      <div className="point">{point}</div>
    </li>
  );
}

function BoardList() {
  const [rankLoadding, setRankLoadding] = useRecoilState(loadding);
  const [rankList, setRankList] = useState(null);
  const fetchData = useCallback(async () => {
    const response = await axios(`${process.env.REACT_APP_API_DEFAULTS_URL}/user/rank`);
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
            key={`${user.id}${user.nickName}`}
          />
        ))}
      </ul>
    </>
  );
}

export default BoardList;
