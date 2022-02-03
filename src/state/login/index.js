import { atom } from 'recoil';

const IS_LOGIN = 'isLogin';
const NAVER_ACESS_TOKEN = 'naverAccessToken';

export const isLogin = atom({
  key: IS_LOGIN,
  default: false,
});

export const naverAcessToken = atom({
  key: NAVER_ACESS_TOKEN,
  default: null,
});
