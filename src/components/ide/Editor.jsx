import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-dracula';

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
      fontSize={typeof fontSize === 'number' ? fontSize : Number(fontSize)}
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
