import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import IDE_OPTION from '../../config/ide.config';
import { setIdeOption } from '../../redux/reducers/ideOption.reducer';
import Select from './Select';
import './settings.scss';

function SettingContainer(props) {
  const { KEYBIND_LIST, FONT_SIZE_LIST, THEME_LIST, LANGUAGE_LIST } = IDE_OPTION;
  const { setshowing, className } = props;
  const { keybind, fontSize, theme, language } = useSelector((state) => state.ideOption);
  const dispatch = useDispatch();
  const ref = useRef();

  const setHandle = (e) => {
    const { name, value } = e.target;
    dispatch(setIdeOption({ key: name, value }));
  };
  const closeModal = (e) => {
    if (ref.current.contains(e.target)) {
      return;
    }
    setshowing(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, []);

  return (
    <>
      <div className="Setting--background--wrapper" />
      <div ref={ref} className={`SettingContainer ${className}`}>
        <div className="buttonContainer">
          <button onClick={() => setshowing(false)}>
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
            id="language"
            name="language"
            setType="language"
            value={language}
            options={LANGUAGE_LIST}
            handle={setHandle}
          />
        </div>
      </div>
    </>
  );
}

export default memo(SettingContainer);
