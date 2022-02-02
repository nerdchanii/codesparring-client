import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver';
// recoil &state
import { useRecoilValue } from 'recoil';
import { ideState } from '../../state/ide/index';
import './Ide.scss';
import 'brace/ext/language_tools';

function Editor({ value, onChange }) {
  const { keybind, lang, theme, fontSize } = useRecoilValue(ideState);

  return (
    <AceEditor
      className="Editor"
      width="100%"
      mode={lang === 'cpp' ? 'c_cpp' : lang}
      keyboardHandler={keybind}
      theme={theme}
      fontSize={fontSize}
      showGutter
      highlightActiveLine
      showPrintMargin={false}
      value={value}
      onChange={onChange}
      setOptions={{
        enableLiveAutocompletion: true,
        enableBasicAutocompletion: true,
      }}
    />
  );
}

export default Editor;
