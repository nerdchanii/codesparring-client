import React from 'react';
import NoticeBoardHeader from './NoticeBoardHeader';
import NoticeBoardList from './NoticeBoardList';

function Notice() {
  return (
    <div className="Notice">
      <NoticeBoardHeader />
      <NoticeBoardList />
    </div>
  );
}

export default Notice;
