import { atom, selector } from 'recoil';

const IDE_STATE = 'ideState';
const LANG_EXT_KEY = 'langExt';
export const LANG_TYPE = {
  CPP: 'cpp',
  PYTHON: 'python',
  JAVA: 'java',
  JS: 'javascript',
};

const LANG_EXT = {
  CPP: 'cpp',
  PYTHON: 'py',
  JAVA: 'java',
  JS: 'js',
};

function setExt(lang) {
  switch (lang) {
    case LANG_TYPE.CPP:
      return LANG_EXT.CPP;
    case LANG_TYPE.PYTHON:
      return LANG_EXT.PYTHON;
    case LANG_TYPE.JS:
      return LANG_EXT.JS;
    case LANG_TYPE.JAVA:
      return LANG_EXT.JAVA;
    default:
      return lang;
  }
}
export const ideState = atom({
  key: IDE_STATE,
  default: {
    keybind: 'vscode',
    theme: 'monokai',
    fontSize: 14,
    lang: LANG_TYPE.JS,
  },
});

export const langExt = selector({
  key: LANG_EXT_KEY,
  get: ({ get }) => {
    const settings = get(ideState);
    const { lang } = settings;

    return setExt(lang);
  },
});
