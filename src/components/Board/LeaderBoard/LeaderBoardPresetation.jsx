import React from 'react';
import PropsTypes from 'prop-types';
import ListHeader from '../List/ListHeader/ListHeader';
import List from '../List';
import Title from '../Title';
import Column from '../Column';
import '../Board.scss';
import ListItem from '../List/ListItem/ListItem';

function LeaderBoardPresentation(props) {
  const { className, title, data } = props;

  if (!data?.length) {
    return null;
  }
  return (
    <div className={`${className} board`}>
      <Title>{title}</Title>
      <ListHeader className="header">
        {Object.keys(data[0]).map((col, idx) => (
          <Column key={idx}>{col}</Column>
        ))}
      </ListHeader>
      <List className="list">
        {data.map((item, idx) => (
          <ListItem className="item" key={idx}>
            {Object.values(item).map((col, colIdx) => (
              <Column key={colIdx}>{col}</Column>
            ))}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

LeaderBoardPresentation.propsTypes = {
  className: PropsTypes.string,
  title: PropsTypes.string,
  data: PropsTypes.arrayOf(PropsTypes.object),
};

LeaderBoardPresentation.deafultProps = {
  className: '',
  title: '보드',
  data: [],
};

export default LeaderBoardPresentation;
