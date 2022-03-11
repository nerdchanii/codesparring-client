import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { BiLabel } from 'react-icons/bi';
import env from '../../env';
import './Notice.scss';

function NoticeBoardListItem(props) {
  const { id, label, title, body, writer } = props;

  return (
    <article className="NoticeBoardItem">
      <header className="item-title">
        <div>
          {id}:{title}
        </div>
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
        <div className="item-body"> {body}</div>
      </details>
      <footer className="item-footer">
        <div className="item-writer">wrtie by :{writer}</div>
      </footer>
    </article>
  );
}

function NoticeBoardList() {
  const [loading, setLoading] = useState(false);
  const [notices, setNotices] = useState(null);
  const fetchData = useCallback(async () => {
    const response = await axios.get(`${env.API_URL}/notice`);
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
    return <div>...loadding...</div>;
  }
  return (
    <div className="NoticeBoardList">
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
}

export default NoticeBoardList;
