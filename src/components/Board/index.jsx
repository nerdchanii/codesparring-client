import React from 'react';
import PropsTypes from 'prop-types';
import Title from './Title';
import List from './List';
import ListItem from './ListItem';
import ListHeader from './ListHeader';
import './Board.scss';

const CLASS_NAME = {
  BOARD: 'board',
  TITLE: 'board__title',
  LIST: 'board__list--container',
  LIST_ITEM: 'board__list--item',
  LIST_HEADER: 'board__list--header',
};

function Board(props) {
  const { className, title, data } = props;

  if (!data) {
    return <></>;
  }
  return (
    <div className={`${className}__board ${CLASS_NAME.BOARD}`}>
      {!!title && <Title className={`${className}__title ${CLASS_NAME.TITLE}`}>{title}</Title>}
      {data.length > 0 && (
        <ListHeader
          className={`${className}__list--header ${CLASS_NAME.LIST_HEADER}`}
          columns={Object.keys(data[0])}
        />
      )}
      <List className={`${className}__list--container ${CLASS_NAME.LIST}`}>
        {data.map((item, idx) => (
          <ListItem
            className={`${className}__list--item ${CLASS_NAME.LIST_ITEM}`}
            key={idx}
            item={item}
          />
        ))}
      </List>
    </div>
  );
}

Board.PropsTypes = {
  className: PropsTypes.string,
  title: PropsTypes.string,
  data: PropsTypes.array,
};

Board.deafultProps = {
  className: CLASS_NAME.BOARD,
  title: null,
  data: null,
};

export default Board;
