import { atom } from 'recoil';

const KEY = 'problemAtom';

const problemAtom = atom({
  key: KEY,
  default: null,
});

export default problemAtom;
