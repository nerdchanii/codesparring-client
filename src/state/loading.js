import { atom } from 'recoil';

// 로딩상태를 여기서 전부 관리하는게 좋을지 고민해봐야함
// eslint-disable-next-line import/prefer-default-export
export const loadding = atom({
  key: 'loading',
  default: false,
});
