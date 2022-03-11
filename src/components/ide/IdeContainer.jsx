import React, { useCallback, useState } from 'react';
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
import problemNumberState from '../../state/problem/problemNumberState';

async function getPost(lang, value, input = '', expectOutput = '') {
  const response = await axios.post(
    `${env.API_URL}/code/test`,
    {
      lang,
      code: value,
      stdin: input,
      output: expectOutput,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response.data;
}

function IdeContainer() {
  const defaultValue = useRecoilValue(aceEditorDefaultValue);
  const testCase = useRecoilValue(testCaseState);
  const problemNumber = useRecoilValue(problemNumberState);
  const { keybind, fontSize, theme, lang } = useRecoilValue(ideState);
  const [value, setValue] = useState(defaultValue);
  const [result, setResult] = useState([]);

  const onChange = (e) => {
    setValue(e);
  };

  const runTest = useCallback(async () => {
    if (testCase.length < 1) {
      const data = await getPost(lang, value);
      setResult([data]);
    } else {
      const response = await Promise.allSettled(
        testCase.map((eachCase) => getPost(lang, value, eachCase.input, eachCase.output)),
      );
      const data = response.map((eachCase) => eachCase.value);
      setResult(data);
    }
  }, [lang, value, testCase]);

  const onSubmit = useCallback(async () => {
    const response = await axios.post(
      `${env.API_URL}/code/submit`,
      {
        problemId: problemNumber,
        lang,
        code: value,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (typeof response.data === 'object') {
      setResult([response.data]);
    }
    setResult(response.data);
  }, [lang, problemNumber, value]);

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
      <Output runTest={runTest} onSubmit={onSubmit} result={result} />
    </div>
  );
}

export default IdeContainer;
