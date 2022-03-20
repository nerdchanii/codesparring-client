import { atom } from 'recoil';

const LOGIN_STATE_KEY = 'LOGIN_STATE';

const LOGIN_STATE = atom({
  key: LOGIN_STATE_KEY,
  default: !!localStorage.LOGIN_TOKEN,
});

export default LOGIN_STATE;
