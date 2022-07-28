import React from 'react';
import PropsTypes from 'prop-types';
import ListHeader from '../List/ListHeader/ListHeader';
import List from '../List';
import Column from '../Column';
import '../Board.scss';
import ListItem from '../List/ListItem/ListItem';
import Title from '../../design/Title';

function LeaderBoardPresenter(props) {
  const { className, title, data } = props;

  if (!data?.length) {
    return null;
  }
  return (
    <div className={`${className} board`}>
      <Title className="center">{title}</Title>
      <ListHeader className="header">
        <Column flex={1}>순위</Column>
        <Column flex={2}>이름</Column>
        <Column flex={2}>점수</Column>
      </ListHeader>
      <List className="list">
        {data.map((item, idx) => (
          <ListItem className="item" key={idx}>
            <Column flex={1}>{idx + 1}</Column>
            <Column flex={2}>{item.username}</Column>
            <Column flex={2}>{item.points}</Column>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

LeaderBoardPresenter.propsTypes = {
  className: PropsTypes.string,
  title: PropsTypes.string,
  data: PropsTypes.arrayOf(PropsTypes.object),
};

LeaderBoardPresenter.deafultProps = {
  className: '',
  title: '',
  data: [],
};

export default LeaderBoardPresenter;
