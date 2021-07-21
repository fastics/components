import { ChangeEvent, useCallback, useMemo, useRef, useState } from 'react';

interface UseTextEditingControllerProps<B extends boolean> {
  initialValue?: string;
  /**
   * Update this to `true` if you want to listen the value.
   * BE CAREFUL /!\ It will re-render each time you type if you enable it.
   */
  listenValue?: B;
}

const useTextEditingController = <B extends boolean>({
  initialValue = '',
  listenValue,
}: UseTextEditingControllerProps<B> = {}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(initialValue);
  const [selectedText, setSelectedText] = useState('');

  const handleSelectionChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.selectionStart === null) return null;
    if (event.target.selectionEnd === null) return null;

    setSelectedText(
      event.target.value.substring(event.target.selectionStart, event.target.selectionEnd),
    );
  }, []);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const clear = () => {
    setValue('');
    inputRef.current && (inputRef.current.value = '');
  };

  const getValue = useCallback(() => {
    return inputRef.current?.value;
  }, []);

  const resultWithoutValue = useMemo(() => {
    return {
      /**
       * The currently selected text.
       */
      selectedText,
      /**
       * Handles input value change.
       */
      handleChange,
      /**
       * Handles selection change.
       */
      handleSelectionChange,
      /**
       * Use this method to get current value.
       */
      getValue,
      /**
       * Set the value to empty.
       */
      clear,
      ref: inputRef,
    };
  }, [getValue, handleChange, handleSelectionChange, selectedText]);

  const resultWithValue = useMemo(() => {
    return {
      /**
       * The currently selected text.
       */
      selectedText,
      /**
       * Handles input value change.
       */
      handleChange,
      /**
       * Handles selection change.
       */
      handleSelectionChange,
      /**
       * The actual input value.
       */
      value,
      /**
       * Use this method to get current value.
       */
      getValue,
      /**
       * Set the value to empty.
       */
      clear,
      ref: inputRef,
    };
  }, [getValue, handleChange, handleSelectionChange, selectedText, value]);

  return (listenValue ? resultWithValue : resultWithoutValue) as B extends true
    ? typeof resultWithValue
    : typeof resultWithoutValue;
};

export type UseTextEditingController = ReturnType<typeof useTextEditingController>;

export default useTextEditingController;
