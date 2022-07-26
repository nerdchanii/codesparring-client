import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotices } from '../../../redux/reducers/notice.reducer';
import NoticeBoardHeader from './NoticeBoardHeader';
import NoticeBoardList from './NoticeBoardList';

function Notice() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const notices = useSelector((state) => state.notice.notices);
  const fetchData = useCallback(() => {
    dispatch(getNotices());
  }, []);
  useEffect(() => {
    setLoading(true);
    try {
      fetchData();
      // throw new Error();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  if (!notices) {
    return <div />;
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
