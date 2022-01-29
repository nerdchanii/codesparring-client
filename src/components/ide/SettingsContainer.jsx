import { useRecoilState } from 'recoil';
// TODO
// options에 들어갈 변수리스트 설정해야함
import { ideState } from '../../state/ide';
import {
  keybindList,
  fontSizeList,
  themeList,
  languageList,
} from '../../constants/AceOption';
import './settings.scss';
import Select from './Select';
import { AiOutlineClose } from 'react-icons/ai';

const SettingContainer = (props) => {
  const { setshowing } = props;
  const [ideSetting, setIdeSettings] = useRecoilState(ideState);
  const { lang, fontSize, theme, keybind } = ideSetting;

  const setHandle = (e) => {
    const { name, value } = e.target;
    setIdeSettings({
      ...ideSetting,
      [name]: name === 'fontSize' ? parseInt(value) : value,
    });
  };

  return (
    <div className="SettingContainer">
      <div className="buttonContainer">
        <button
          onClick={() => {
            setshowing(false);
          }}
        >
          <AiOutlineClose />
        </button>
      </div>
      <div className="options">
        <label>keybind</label>
        <Select
          id="keybind"
          name="keybind"
          setType="keybind"
          value={keybind}
          options={keybindList}
          handle={setHandle}
        />
      </div>

      <div className="options">
        <label>fontSize</label>
        <Select
          id="fontSize"
          name="fontSize"
          setType="fontSize"
          value={fontSize}
          options={fontSizeList}
          handle={setHandle}
        />
      </div>
      <div className="options">
        <label>theme</label>
        <Select
          id="theme"
          name="theme"
          setType="theme"
          value={theme}
          options={themeList}
          handle={setHandle}
        />
      </div>
      <div className="options">
        <label>lang</label>
        <Select
          id="lang"
          name="lang"
          setType="lang"
          value={lang}
          options={languageList}
          handle={setHandle}
        />
      </div>
    </div>
  );
};

export default SettingContainer;
