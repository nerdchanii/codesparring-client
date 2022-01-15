import { selector } from 'recoil';
import { ideState } from '.';

export const aceEditorDefaultValue = selector({
  key: 'aceEditorDefaultValue',
  get: ({ get }) => {
    const settings = get(ideState);
    const { lang } = settings;

    return setValue(lang);
  },
});

function setValue(lang) {
  switch (lang) {
    case 'cpp':
      return cpp_value;
    case 'python':
      return python_value;
    default:
      return '';
  }
}

const cpp_value = `#include <string>
#include <vector>
using namespace std;
int solution(vector<vector<string>> clothes) {
    int answer = 0;
    return answer;
}
`;

const python_value = `def solution():
result = ''
return result`;
