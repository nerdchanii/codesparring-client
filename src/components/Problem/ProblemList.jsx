import { useEffect, useState } from 'react';
import './ProblemList.scss';
import { loadding } from '../../state/loading';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

const ProblemHeaders = () => {
  return (
    <div className="ProblemHeaders">
      <div className="problem-number">문제번호</div>
      <div className="problem-level">레벨</div>
      <div className="problem-title">문제제목</div>
      <div className="problem-type">문제분류</div>
    </div>
  );
};
const ProblemListItem = ({ problem }) => {
  const { id, level, problemType, title } = problem;

  return (
    <li className="ProblemListItem">
      <div className="problem-number">{id}</div>
      <div className="problem-level">{level}</div>
      <Link to={`/practice/${id}`} className="problem-title">
        {title}
      </Link>
      <div className="problem-type">{problemType}</div>
    </li>
  );
};

const ProblemList = () => {
  const [listLoadding, setListLoadding] = useRecoilState(loadding);
  const [problemItems, setProblemItems] = useState(null);

  useEffect(() => {
    const fectchData = async () => {
      setListLoadding(true);
      try {
        const response = await Promise.resolve([
          {
            id: 1,
            level: 1,
            title: '입력된 수 더하기',
            problemType: '구현',
          },
          { id: 2, level: 2, title: '해시브라운해쉬', problemType: '구현' },
          { id: 3, level: 2, title: '가운데 숫자넣기', problemType: '구현' },
          { id: 4, level: 3, title: '풀 스택 배낭', problemType: '그리디' },
          {
            id: 5,
            level: 4,
            title: '어느길로 가지?',
            problemType: 'A*알고리즘',
          },
          { id: 6, level: 5, title: '6번 문제', problemType: '구현' },
          { id: 7, level: 5, title: '7번문제', problemType: '구현' },
          { id: 8, level: 2, title: '8번문제', problemType: '구현' },
          { id: 9, level: 9, title: '9번 문제', problemType: '문제종류' },
        ]);
        console.log(response);
        setProblemItems(response);
      } catch (e) {
        console.log(e);
      } finally {
        setListLoadding(false);
      }
    };
    fectchData();
  }, [setListLoadding, setProblemItems]);

  if (listLoadding) {
    return <p> ...loadding</p>;
  }
  if (!problemItems) {
    return <p> 데이터가 없어유...</p>;
  }
  return (
    <div>
      <ProblemHeaders />
      <ul>
        {problemItems.map((problem) => (
          <ProblemListItem problem={problem} key={problem.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProblemList;
