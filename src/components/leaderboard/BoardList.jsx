import { useRecoilState } from 'recoil';
import { loadding } from '../../state/loading';
import { useEffect, useState } from 'react';
import './BoardListItem.scss';
// POW = Prolbem of Week
const BoardListItem = (props) => {
  const { ranking, nickName, point, POW } = props;

  return (
    <li className="BoardListItem">
      <div className="Ranking">{ranking}</div>
      <div className="NickName">{nickName}</div>
      <div className="point">{point}</div>
      <div className="POW">{POW}</div>
    </li>
  );
};

const BoardList = () => {
  // const { LeaderBoard } = loadding;
  // api로 뱅열 만만들들어내야함
  const [rankLoadding, setRankLoadding] = useRecoilState(loadding);
  const [rankList, setRankList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // setRankLoadding({...rankLoadding, LeaderBoard : true})
      setRankLoadding(true);
      try {
        const response = await Promise.resolve([
          {
            id: 1,
            nickName: '복이',
            point: '231',
            POW: '26',
          },
          {
            id: 2,
            nickName: '정현',
            point: '189',
            POW: '21',
          },
          {
            id: 3,
            nickName: '안개',
            point: '177',
            POW: '11',
          },
          {
            id: 4,
            nickName: '개블리셔',
            point: '133',
            POW: '16',
          },
          {
            id: 5,
            nickName: '칸예',
            point: '111',
            POW: '22',
          },
          {
            id: 6,
            nickName: '차니',
            point: '89',
            POW: '32',
          },
          {
            id: 7,
            nickName: '라빌',
            point: '77',
            POW: '13',
          },
          {
            id: 8,
            nickName: '너드',
            point: '67',
            POW: '22',
          },
          {
            id: 9,
            nickName: '군인',
            point: '56',
            POW: '11',
          },
          {
            id: 10,
            nickName: '바부',
            point: '49',
            POW: '8',
          },
          {
            id: 11,
            nickName: '사랑공',
            point: '44',
            POW: '24',
          },
          {
            id: 12,
            nickName: '랑공사',
            point: '41',
            POW: '11',
          },
          {
            id: 13,
            nickName: '바아부우',
            point: '33',
            POW: '12',
          },
          {
            id: 14,
            nickName: '호잇',
            point: '23',
            POW: '9',
          },
          {
            id: 15,
            nickName: '야야',
            point: '19',
            POW: '8',
          },
          {
            id: 16,
            nickName: '야1야',
            point: '14',
            POW: '8',
          },
        ]);
        setRankList(response);
        console.log(response);
      } catch (e) {
        console.log(e);
      } finally {
        setRankLoadding(false);
      }
    };
    fetchData();
  }, [setRankList, setRankLoadding]);

  if (rankLoadding) {
    return <h1>...loadding</h1>;
  }
  if (!rankList) {
    return <h1>정보가 없습니다</h1>;
  }
  return (
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
  );
};

export default BoardList;
