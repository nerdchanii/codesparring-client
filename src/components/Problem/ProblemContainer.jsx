import React, { useCallback, useEffect, useState } from 'react';

import { useSetRecoilState } from 'recoil';
import './Problem.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import problemNumberState from '../../state/problem/problemNumberState';
import ProblemHeader from './ProblemHeader';
import ProblemBody from './ProblemBody';

import env from '../../env';

function ProblemContainer() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const setProblemNumberState = useSetRecoilState(problemNumberState);
  const { id } = useParams();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${env.API_URL}/api/problem/${id}`);
      setData(response.data);
      setProblemNumberState(response.data.id);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <div
          style={{
            display: 'block',
            height: '100%',
            justifyContent: 'center',
            alignItem: 'center',
          }}
        >
          <CircularProgress sx={{ color: '#2f9272' }} />
        </div>
      </div>
    );
  }
  if (!data) {
    return <div>..Error..! please reload</div>;
  }
  if (data) {
    return (
      <div className="ProblemContainer">
        <ProblemHeader data={data} />
        <ProblemBody data={data.data} />
      </div>
    );
  }
}

export default ProblemContainer;
