import React, { useCallback, useEffect, useState } from 'react';
import { BiLabel } from 'react-icons/bi';

const NoticeBoardListItem = (props) => {
  const { id, label, title, body, writer } = props;

  return (
    <article className="NoticeBoardItem">
      <header className="item-title">
        {id}: {title}
      </header>
      <div className="item-body"> {body}</div>
      <footer className="item-footer">
        <div className="item-writer">wrtie by : {writer}</div>
        <div className="item-label">
          <BiLabel />
          {label.map((eachLabel, idx) => (
            <span className="each-label" key={idx}>
              {eachLabel}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
};

const NoticeBoardList = () => {
  const [loading, setLoading] = useState(false);
  const [notices, setNotices] = useState(null);
  const fetchData = useCallback(async () => {
    const mock = [
      {
        id: 2,
        title: '공지2',
        body: 'Cillum ipsum esse incididunt minim aliqua amet in. Pariatur sit id qui mollit adipisicing ullamco reprehenderit esse enim amet est consectetur eiusmod. Consectetur exercitation enim nisi reprehenderit dolore incididunt aliquip minim excepteur cupidatat. Commodo occaecat cupidatat irure aute veniam non deserunt officia magna proident officia officia.',
        label: ['update', 'extend', '중요', '긴급'],
        writer: 'nerdchanii',
      },
      {
        id: 1,
        title: '공지1',
        body: 'Cillum ipsum esse incididunt minim aliqua amet in. Pariatur sit id qui mollit adipisicing ullamco reprehenderit esse enim amet est consectetur eiusmod. Consectetur exercitation enim nisi reprehenderit dolore incididunt aliquip minim excepteur cupidatat. Commodo occaecat cupidatat irure aute veniam non deserunt officia magna proident officia officia.',
        label: ['update', 'extend', '중요', '긴급'],
        writer: 'nerdchanii',
      },
    ];
    const response = await Promise.resolve(mock);
    setNotices(response);
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
    return <div>...loadding...</div>;
  }
  return (
    <div>
      {notices.map((item) => (
        <NoticeBoardListItem
          key={item.id}
          id={item.id}
          label={item.label}
          title={item.title}
          body={item.body}
          writer={item.writer}
        />
      ))}
    </div>
  );
};

export default NoticeBoardList;
