import { atom, selector } from 'recoil';

export const ideState = atom({
  key: 'todoListState',
  default: {
    keybind: 'vscode',
    theme: 'monokai',
    fontSize: 14,
    lang: 'cpp',
  },
});

export const langExt = selector({
  key: 'langext',
  get: ({ get }) => {
    const settings = get(ideState);
    const { lang } = settings;

    return setExt(lang);
  },
});

function setExt(lang) {
  switch (lang) {
    case 'cpp':
      return 'cpp';
    case 'python':
      return 'py';
    case 'javascript':
      return 'js';
    case 'java':
      return '.java';
    default:
      return lang;
  }
}
