import React from 'react';
import PropsTypes from 'prop-types';
import ListHeader from './ListHeader';
import List from './List';
import ListItem from './ListItem';
import Title from './Title';
import Column from './Column';
import './Board.scss';

function Board(props) {
  const { className, title, data } = props;

  return (
    !!data.length && (
      <div className={className}>
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
    )
  );
}

Board.propsTypes = {
  className: PropsTypes.string,
  title: PropsTypes.string,
  data: PropsTypes.arrayOf(PropsTypes.object),
};

Board.deafultProps = {
  className: 'board',
  title: '보드',
  data: null,
};

export default Board;
