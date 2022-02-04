import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { ideState } from '../../state/ide/index';
import testCaseState from '../../state/problem/testCaseState';
import Editor from './Editor';
import Header from './Header';
import Output from './Output';
import aceEditorDefaultValue from '../../state/ide/aceEditorDefaultValue';
import './Ide.scss';
import env from '../../env';

async function getPost(lang, value, input = '') {
  const response = await axios.post(`${env.API_URL}/api/run`, {
    lang,
    code: value,
    stdin: input,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

function IdeContainer() {
  const defaultValue = useRecoilValue(aceEditorDefaultValue);
  const testCase = useRecoilValue(testCaseState);
  const { keybind, fontSize, theme, lang } = useRecoilValue(ideState);
  const [value, setValue] = useState(defaultValue);
  const [result, setResult] = useState([]);
  const [expectedOutput, setExpectedOutput] = useState([]);
  const onChange = (e) => {
    setValue(e);
  };
  useEffect(() => {
    const wholeOutput = testCase.map((each) => each.output);
    setExpectedOutput(wholeOutput);
  }, [testCase]);

  const runTest = useCallback(async () => {
    if (testCase.length < 1) {
      const data = await getPost(lang, value);
      setResult(data);
    } else {
      const data = await Promise.all(testCase.map((eachCase) => getPost(lang, value, eachCase.input)));
      setResult(data);
    }
  }, [lang, value, testCase]);
  return (
    <div className="IdeContainer">
      <Header />
      <Editor
        value={value}
        onChange={onChange}
        keybind={keybind}
        fontSize={fontSize}
        theme={theme}
        lang={lang}
      />
      <Output runTest={runTest} result={result} expectedOut={expectedOutput} />
    </div>
  );
}

export default IdeContainer;
