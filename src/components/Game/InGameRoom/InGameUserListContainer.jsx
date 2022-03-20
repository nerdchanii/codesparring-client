import React from 'react';

import './InGameUserList.scss';

function UserListItem({ name }) {
  return <li className="InGameUserListItem">{name}</li>;
}

function InGameUserListContainer({ users }) {
  if (!users) {
    return <></>;
  }
  return (
    <div className="InGameUserListContainer">
      <ul className="InGameUserList">
        {users.map((item) => (
          <UserListItem key={item} name={item} />
        ))}
      </ul>
    </div>
  );
}

export default InGameUserListContainer;
