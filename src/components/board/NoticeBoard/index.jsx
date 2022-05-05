import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import NoticeBoardHeader from './NoticeBoardHeader';
import NoticeBoardList from './NoticeBoardList';

function Notice() {
  const [loading, setLoading] = useState(false);
  const [notices, setNotices] = useState(null);
  const fetchData = useCallback(async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_DEFAULTS_URL}/notice`);
    const { data } = response;
    setNotices(data);
  }, []);

  useEffect(() => {
    setLoading(true);
    try {
      fetchData();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  if (!notices) {
    return <div>no data</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="Notice">
      <NoticeBoardHeader />
      <NoticeBoardList notices={notices} />
    </div>
  );
}

export default Notice;
