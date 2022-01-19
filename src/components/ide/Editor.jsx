import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver';
//recoil &state
import { useRecoilValue } from 'recoil';
import { ideState } from '../../state/ide/index';
import { aceEditorDefaultValue } from '../../state/ide/aceEditorDefaultValue';
import './Ide.scss';
const Editor = () => {
  const { keybind, lang, theme, fontSize } = useRecoilValue(ideState);
  const defaultValue = useRecoilValue(aceEditorDefaultValue);

  return (
    <AceEditor
      className="Editor"
      width="100%"
      mode={lang === 'cpp' ? 'c_cpp' : lang}
      keyboardHandler={keybind}
      theme={theme}
      fontSize={parseInt(fontSize)}
      showGutter={true}
      highlightActiveLine={false}
      defaultValue={defaultValue}
      showPrintMargin={false}
    />
  );
};

export default Editor;
