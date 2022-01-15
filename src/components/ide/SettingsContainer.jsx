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

import Select from './Select';

const SettingContainer = () => {
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
    <div>
      <Select
        setType="keybind"
        value={keybind}
        options={keybindList}
        handle={setHandle}
      />
      <Select
        setType="fontSize"
        value={fontSize}
        options={fontSizeList}
        handle={setHandle}
      />
      <Select
        setType="theme"
        value={theme}
        options={themeList}
        handle={setHandle}
      />
      <Select
        setType="lang"
        value={lang}
        options={languageList}
        handle={setHandle}
      />
    </div>
  );
};

export default SettingContainer;
