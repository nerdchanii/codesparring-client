import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submit, test } from '../../redux/reducers/code.reducer';
import Editor from './Editor';
import Header from './Header';
import Output from './Output';
import './Ide.scss';

function IdeContainer() {
  const { keybind, fontSize, theme, language } = useSelector((state) => state.ideOption);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const runTest = useCallback(() => {
    dispatch(test({ code: value }));
  }, [value]);

  const onSubmit = useCallback(() => {
    dispatch(submit({ code: value }));
  }, [value]);

  return (
    <div className="IdeContainer">
      <Header language={language} />
      <Editor
        value={value}
        onChange={setValue}
        keybind={keybind}
        fontSize={fontSize}
        theme={theme}
        lang={language}
      />
      <Output runTest={runTest} onSubmit={onSubmit} />
    </div>
  );
}

export default IdeContainer;
