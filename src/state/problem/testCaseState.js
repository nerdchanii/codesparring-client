import { atom } from 'recoil';

const key = 'testCaseState';

const testCaseState = atom({
  key,
  default: [],
});

export default testCaseState;
