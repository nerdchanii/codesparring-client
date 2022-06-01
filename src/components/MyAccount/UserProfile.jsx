import React from 'react';
import './MyAccount.scss';

function UserProfile({ email, username }) {
  return (
    <div className="UserProfile">
      <div className="textContainer">
        <p className="username">
          username:
          <span>{username}</span>
        </p>
        <p className="email">
          email:
          <span>{email}</span>
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
