import { useEffect, useState } from 'react';

const DELAY_TIME = 300;

export const useDebounce = (keyword: string) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(keyword);

  useEffect(() => {
    const debounceTimer = setTimeout(() => setDebouncedValue(keyword), DELAY_TIME);

    return () => clearTimeout(debounceTimer);
  }, [keyword]);

  return { debouncedValue };
};
