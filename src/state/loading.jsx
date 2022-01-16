import { atom } from 'recoil';

export const loadding = atom({
  key: 'loading',
  default: false,
});

// export const [isLoadding, setIsLoadding] = useRecoilState(loadding);
