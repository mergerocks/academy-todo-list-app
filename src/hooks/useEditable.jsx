import { useEffect, useRef, useState } from "react";

export const useEditable = ({ cleanAfterSuccess, onSave, ref }) => {
  const inputRef = useRef(null);
  const [isInputActive, setIsInputActive] = useState(false);
  const [value, setValue] = useState('');

  const onBlur = async () => {
    const ok = await onSave(value);
    if (ok) {
      setIsInputActive(false);
    }
    if (ok && cleanAfterSuccess) {
      setValue('');
    }
  };

  useEffect(() => {
    if (inputRef?.current && isInputActive) {
      inputRef.current.focus();
    }
  }, [inputRef, isInputActive]);

  return { onBlur, isInputActive, inputRef, onChage: setValue, value, setIsInputActive };
};
