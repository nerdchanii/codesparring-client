import React, { useCallback } from 'react';
import { BsFillLockFill, BsFillUnlockFill } from 'react-icons/bs';
const EditButton = (props) => {
  const { display, edit, toggle, draftingUserInfo } = props;

  const onSave = useCallback(async () => {
    toggle(false);
    // 여기서 POST METHOD

    console.log(draftingUserInfo);
  }, [draftingUserInfo]);

  const onEdit = useCallback(() => {
    toggle(true);
  }, []);

  if (!display) return <></>;
  if (edit)
    return (
      <button onClick={onSave}>
        <BsFillUnlockFill />
      </button>
    );
  if (!edit)
    return (
      <button onClick={onEdit}>
        <BsFillLockFill />
      </button>
    );
};

export default EditButton;
