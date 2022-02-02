import React, { useCallback, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import './Problem.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import ProblemHeader from './ProblemHeader';
import ProblemBody from './ProblemBody';

import env from '../../env';

function ProblemContainer() {
  // const { problemNumber } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { id } = useParams();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${env.api_url}/api/problem/${id}`);
      const { responseData } = response;
      setData(responseData);
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
