import React from 'react';
import { useRecoilState } from 'recoil';
import { AiOutlineClose } from 'react-icons/ai';
import { ideState } from '../../state/ide';
import ACE_OPTION from '../../constants/config/AceOption';
import './settings.scss';
import Select from './Select';

function SettingContainer(props) {
  const { KEYBIND_LIST, FONT_SIZE_LIST, THEME_LIST, LANGUAGE_LIST } = ACE_OPTION;
  const { setshowing } = props;
  const [ideSetting, setIdeSettings] = useRecoilState(ideState);
  const { lang, fontSize, theme, keybind } = ideSetting;

  const setHandle = (e) => {
    const { name, value } = e.target;
    setIdeSettings({
      ...ideSetting,
      [name]: value,
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
        <div>keybind</div>
        <Select
          id="keybind"
          name="keybind"
          setType="keybind"
          value={keybind}
          options={KEYBIND_LIST}
          handle={setHandle}
        />
      </div>

      <div className="options">
        <div>fontSize</div>
        <Select
          id="fontSize"
          name="fontSize"
          setType="fontSize"
          value={fontSize}
          options={FONT_SIZE_LIST}
          handle={setHandle}
        />
      </div>
      <div className="options">
        <div>theme</div>
        <Select
          id="theme"
          name="theme"
          setType="theme"
          value={theme}
          options={THEME_LIST}
          handle={setHandle}
        />
      </div>
      <div className="options">
        <div>lang</div>
        <Select
          id="lang"
          name="lang"
          setType="lang"
          value={lang}
          options={LANGUAGE_LIST}
          handle={setHandle}
        />
      </div>
    </div>
  );
}

export default SettingContainer;
