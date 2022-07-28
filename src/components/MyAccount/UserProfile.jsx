import React from 'react';
import './MyAccount.scss';

function UserProfile({ email, username }) {
  return (
    <div className="userprofile">
      <p className="username">
        username
        <span>{username}</span>
      </p>
      <p className="email">
        emai
        <span>{email}</span>
      </p>
    </div>
  );
}

export default UserProfile;
