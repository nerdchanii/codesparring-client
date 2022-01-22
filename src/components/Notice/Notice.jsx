import React from 'react';
import NoticeBoardHeader from './NoticeBoardHeader';
import NoticeBoardList from './NoticeBoardList';

const Notice = () => {
  return (
    <div className="Notice">
      <NoticeBoardHeader />
      <NoticeBoardList />
    </div>
  );
};

export default Notice;
