import React from 'react';
import { AiOutlineTags } from 'react-icons/ai';

import './Notice.scss';

function NoticeBoardListItem(props) {
  const { item } = props;
  const { id, label, title, contents } = item;
  const [isOpen, setIsOpen] = React.useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={onClick} aria-hidden="true">
      <article className="NoticeBoardItem">
        <header className="item-title">
          <p className="title">{`${id}.${title}`}</p>
          <div className="item-label">
            {label.map((eachLabel, idx) => (
              <span className="each-label" key={idx}>
                <AiOutlineTags />
                {eachLabel}
              </span>
            ))}
          </div>
        </header>
        {isOpen && <div className="item-body">{contents}</div>}
      </article>
    </div>
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
