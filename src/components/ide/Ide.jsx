import AceEditor from 'react-ace';
//mode
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
// // theme
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-monokai';

//recoil &state
import { useRecoilValue } from 'recoil';
import { ideState } from '../../state/ide/index';
import { aceEditorDefaultValue } from '../../state/ide/aceEditorDefaultValue';

const Ide = () => {
  const { keybind, lang, theme, fontSize } = useRecoilValue(ideState);
  const defaultValue = useRecoilValue(aceEditorDefaultValue);

  return (
    <AceEditor
      className="Ide"
      width="100%"
      height="100%"
      mode={lang === 'cpp' ? 'c_cpp' : lang}
      keyboardHandler={keybind}
      theme={theme}
      fontSize={parseInt(fontSize)}
      showGutter={true}
      highlightActiveLine={false}
      defaultValue={defaultValue}
    />
  );
};

export default Ide;
