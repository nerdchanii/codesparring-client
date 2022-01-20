import { atom } from 'recoil';
const IS_LOGIN = 'isLogin';

export const isLogin = atom({
  key: IS_LOGIN,
  default: false,
});
