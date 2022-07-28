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
        <button className="tertiary" onClick={() => setshowing(false)}>
          <AiOutlineClose />
        </button>
        <p className="title">설정</p>
        <div className="options">
          <p>키맵설정</p>
          <Select
            className="button outline"
            id="keybind"
            name="keybind"
            setType="keybind"
            value={keybind}
            options={KEYBIND_LIST}
            handle={setHandle}
          />
        </div>

        <div className="options">
          <p>폰트크기</p>
          <Select
            className="button outline"
            id="fontSize"
            name="fontSize"
            setType="fontSize"
            value={fontSize}
            options={FONT_SIZE_LIST}
            handle={setHandle}
          />
        </div>
        <div className="options">
          <p>테마설정</p>
          <Select
            className="button outline"
            id="theme"
            name="theme"
            setType="theme"
            value={theme}
            options={THEME_LIST}
            handle={setHandle}
          />
        </div>
        <div className="options">
          <p>언어설정</p>
          <Select
            className="button outline"
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
