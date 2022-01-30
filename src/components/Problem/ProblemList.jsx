import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
// import { loadding } from '../../state/loading';
// import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import './Problem.scss';

const ProblemListHeader = () => {
  return (
    <div className="ProblemListHeader">
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
  // const [listLoadding, setListLoadding] = useRecoilState(loadding);
  const [problemItems, setProblemItems] = useState(null);
  const [loadding, setLoadding] = useState(false);

  const fetchData = useCallback(async () => {
    setLoadding(true);
    try {
      const response = await axios.get('/api/problem');
      const data = response.data;
      setProblemItems(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadding(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (loadding) {
    return (
      <Box
        sx={{
          display: 'block',
          height: '100%',
          justifyContent: 'center',
          alignItem: 'center',
        }}
      >
        <CircularProgress sx={{ color: '#2f9272' }} />
      </Box>
    );
  }
  if (!problemItems) {
    return <p> 데이터가 없어유...</p>;
  }
  return (
    <>
      <ProblemListHeader />
      <ul className="ProblemListItem-ul">
        {problemItems.map((problem) => (
          <ProblemListItem problem={problem} key={problem.id} />
        ))}
      </ul>
    </>
  );
};

export default ProblemList;
