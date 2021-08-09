import { useEffect, useState } from 'react';

const useMergedState = <T extends any = unknown>(value: T) => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return [internalValue, setInternalValue] as const;
};

export default useMergedState;
