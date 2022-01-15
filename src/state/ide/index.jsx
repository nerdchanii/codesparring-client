import { atom } from 'recoil';

export const ideState = atom({
  key: 'todoListState',
  default: {
    keybind: 'vscode',
    theme: 'monokai',
    fontSize: 14,
    lang: 'cpp',
  },
});
