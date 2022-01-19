import { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver';
//recoil &state
import { useRecoilValue } from 'recoil';
import { ideState } from '../../state/ide/index';
import { aceEditorDefaultValue } from '../../state/ide/aceEditorDefaultValue';
import './Ide.scss';
import 'brace/ext/language_tools';

const Editor = () => {
  const { keybind, lang, theme, fontSize } = useRecoilValue(ideState);
  const defaultValue = useRecoilValue(aceEditorDefaultValue);
  const [value, setValue] = useState(defaultValue);

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <AceEditor
      className="Editor"
      width="100%"
      mode={lang === 'cpp' ? 'c_cpp' : lang}
      keyboardHandler={keybind}
      theme={theme}
      fontSize={parseInt(fontSize)}
      showGutter={true}
      highlightActiveLine={true}
      showPrintMargin={false}
      value={value}
      onChange={onChange}
      setOptions={{
        enableLiveAutocompletion: true,
        enableBasicAutocompletion: true,
      }}
    />
  );
};

export default Editor;
