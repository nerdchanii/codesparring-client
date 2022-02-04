import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver';

import './Ide.scss';
import 'brace/ext/language_tools';

function Editor(props) {
  const { keybind, lang, theme, fontSize, value, onChange } = props;

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
