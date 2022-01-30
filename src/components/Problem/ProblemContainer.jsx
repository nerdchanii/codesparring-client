import { useCallback, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import ProblemHeader from './ProblemHeader';
import ProblemBody from './ProblemBody';
import './Problem.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
const ProblemContainer = () => {
  // const { problemNumber } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { id } = useParams();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/problem/${id}`);
      const data = response.data;
      setData(data);
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
};

export default ProblemContainer;
