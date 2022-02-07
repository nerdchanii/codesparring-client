import { atom } from 'recoil';

const key = 'problemNumberState';

const problemNumberState = atom({
  key,
  // TODO 나중에 0으로 초기화 해야 함.
  default: 1,
});

export default problemNumberState;
