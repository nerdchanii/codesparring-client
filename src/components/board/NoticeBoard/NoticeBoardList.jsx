import React from 'react';
import { BiLabel } from 'react-icons/bi';

import './Notice.scss';

function NoticeBoardListItem(props) {
  const { item } = props;
  const { id, label, title, body, writer } = item;

  return (
    <article className="NoticeBoardItem">
      <header className="item-title">
        <div>{`${id}.${title}`}</div>
        <div className="item-label">
          {label.map((eachLabel, idx) => (
            <span className="each-label" key={idx}>
              <BiLabel />
              {eachLabel}
            </span>
          ))}
        </div>
      </header>
      <details>
        <summary>자세히</summary>
        <div className="item-body">{body}</div>
      </details>
      <footer className="item-footer">
        <div className="item-writer">{`wrtie by :${writer}`}</div>
      </footer>
    </article>
  );
}

function NoticeBoardList(props) {
  const { notices } = props;
  if (!notices) {
    return <div>no data</div>;
  }
  return (
    <div className="NoticeBoardList">
      {notices.map((item) => (
        <NoticeBoardListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default NoticeBoardList;
