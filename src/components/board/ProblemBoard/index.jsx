import React from 'react';
import PropsTypes from 'prop-types';
import ListHeader from '../List/ListHeader/ListHeader';
import List from '../List';
import Title from '../../design/Title';
import Column from '../Column';
import '../Board.scss';
import LinkedListItem from '../List/LinkedItem/LinkedListItem';

function ProblemBoard(props) {
  const { className, title, data } = props;

  if (!data?.length) {
    return null;
  }
  return (
    <div className={`${className} board`}>
      <Title className="center">{title}</Title>
      <ListHeader className="header">
        <Column flex={1}>번호</Column>
        <Column flex={3}>문제명</Column>
        <Column flex={1}>유형</Column>
      </ListHeader>
      <List className="list">
        {data.map((item, idx) => (
          <LinkedListItem className="item" link={item.id} key={idx}>
            <Column flex={1}>{idx + 1}</Column>
            <Column flex={3}>{item.title}</Column>
            <Column flex={1}>{item.type}</Column>
          </LinkedListItem>
        ))}
      </List>
    </div>
  );
}

ProblemBoard.propsTypes = {
  className: PropsTypes.string,
  title: PropsTypes.string,
  data: PropsTypes.arrayOf(PropsTypes.object),
};

ProblemBoard.deafultProps = {
  className: '',
  title: '보드',
  data: [],
};

export default ProblemBoard;
