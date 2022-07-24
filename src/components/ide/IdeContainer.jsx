import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { submit, test } from '../../redux/reducers/code.reducer';
import { emitCodeTest, emitCodeSubmit } from '../../redux/reducers/room.reducer';
import Editor from './Editor';
import Header from './Header';
import Output from './Output';
import './Ide.scss';

function IdeContainer() {
  // if location is /problem, /practice
  const location = useLocation();

  const { keybind, fontSize, theme, language } = useSelector((state) => state.ideOption);
  const { status } = useSelector((state) => state.room);
  const { loading } = useSelector((state) => state.code);
  const outputshow = !(
    location.pathname === '/practice' ||
    location.pathname === '/sparring' ||
    status === 'waiting'
  );

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
      {loading && (
        <div className="loading">
          채점중입니다...
          <br />
          <CircularProgress color="primary" />
        </div>
      )}
      <Header language={language} />
      <Editor
        value={value}
        onChange={setValue}
        keybind={keybind}
        fontSize={fontSize}
        theme={theme}
        lang={language}
      />
      {outputshow && <Output runTest={runTest} onSubmit={onSubmit} />}
    </div>
  );
}

export default IdeContainer;
