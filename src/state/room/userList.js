import { atom } from 'recoil';

const userList = atom({
  key: 'userList',
  default: null,
});

export default userList;
