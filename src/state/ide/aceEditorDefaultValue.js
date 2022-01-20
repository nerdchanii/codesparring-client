import { selector } from 'recoil';
import { ideState, LANG_TYPE } from '.';
const ACE_EDITOR_DEFAULT_VALUE = 'aceEditorDefaultValue';
const DEFAULT_VALUE = {
  CPP: `#include <string>
#include <vector>
using namespace std;
int solution() {
    int answer = 0;
    return answer;
}
`,
  PYTHON: `def solution():
result = ''
return result`,

  JAVA: `class Solution {
  public int solution() {
      int answer = 0;
      return answer;
  }
}`,
  JS: `function solution() {
  var answer = 0;
  return answer;
}`,
};

export const aceEditorDefaultValue = selector({
  key: ACE_EDITOR_DEFAULT_VALUE,
  get: ({ get }) => {
    const settings = get(ideState);
    const { lang } = settings;

    return setValue(lang);
  },
});

function setValue(language_type) {
  switch (language_type) {
    case LANG_TYPE.CPP:
      return DEFAULT_VALUE.CPP;
    case LANG_TYPE.PYTHON:
      return DEFAULT_VALUE.PYTHON;
    case LANG_TYPE.JAVA:
      return DEFAULT_VALUE.JAVA;
    case LANG_TYPE.JS:
      return DEFAULT_VALUE.JS;
    default:
      return '';
  }
}
