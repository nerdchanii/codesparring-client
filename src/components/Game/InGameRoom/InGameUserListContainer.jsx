import React, { useEffect, useState } from 'react';
import { GrStatusGoodSmall } from 'react-icons/gr';
import './InGameUserList.scss';
const UserListItem = ({ status, name }) => {
  const [circleColor, setCircleColor] = useState('black');

  useEffect(() => {
    switch (status) {
      case 'good':
        setCircleColor('green');
        break;
      case 'bad':
        setCircleColor('red');
        break;
      default:
        setCircleColor('lightGray');
        break;
    }
  }, [status]);

  return (
    <li className="InGameUserListItem">
      <GrStatusGoodSmall style={{ color: circleColor }} />
      {name}
    </li>
  );
};

const InGameUserListContainer = () => {
  const userList = [
    { nickname: 'nerdchanii', status: 'good' },
    { nickname: 'whos', status: 'good' },
    { nickname: 'coder', status: 'good' },
    { nickname: 'sparring', status: 'good' },
  ];
  return (
    <div className="InGameUserListContainer">
      <ul className="InGameUserList">
        {userList.map((item) => (
          <UserListItem
            key={item.nickname}
            name={item.nickname}
            status={item.status}
          />
        ))}
      </ul>
    </div>
  );
};

export default InGameUserListContainer;
