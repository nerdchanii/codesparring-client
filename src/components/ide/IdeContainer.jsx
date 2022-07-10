import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submit, test } from '../../redux/reducers/code.reducer';
import { emitCodeTest, emitCodeSubmit } from '../../redux/reducers/room.reducer';
import Editor from './Editor';
import Header from './Header';
import Output from './Output';
import './Ide.scss';

function IdeContainer() {
  const { keybind, fontSize, theme, language } = useSelector((state) => state.ideOption);
  const { status } = useSelector((state) => state.room);

  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const runTest = useCallback(() => {
    if (!!status) {
      return dispatch(emitCodeTest({ lang: language, code: value }));
    }
    dispatch(test({ code: value }));
  }, [value, status]);

  const onSubmit = useCallback(() => {
    if (!!status) {
      return dispatch(emitCodeSubmit({ lang: language, code: value }));
    }
    dispatch(submit({ code: value }));
  }, [value, status]);

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
