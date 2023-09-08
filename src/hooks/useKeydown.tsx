import React from 'react';

import { Sick } from './useSearch';

interface KeyDownHandlerProps {
  recommendedKeywords: Sick[];
  isSearchBarFocused: boolean;
  focusedResult: number;
  setIsSearchBarFocused: React.Dispatch<React.SetStateAction<boolean>>;
  setFocuedResult: React.Dispatch<React.SetStateAction<number>>;
}

interface KeyEventType {
  [key: string]: () => void;
}
function useKeyDown({
  recommendedKeywords,
  focusedResult,
  setFocuedResult,
  isSearchBarFocused,
  setIsSearchBarFocused,
}: KeyDownHandlerProps) {
  const resultFirstIndex = 0;
  const resultLastIndex = recommendedKeywords.length - 1;
  const KeyEvent: KeyEventType = {
    ArrowDown: () => {
      if (focusedResult < resultLastIndex) setFocuedResult(prev => prev + 1);
    },

    ArrowUp: () => {
      if (focusedResult > resultFirstIndex) setFocuedResult(prev => prev - 1);
    },

    Escape: () => {
      if (isSearchBarFocused) {
        setIsSearchBarFocused(false);
      }
    },
  };

  const pressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Escape') e.currentTarget.blur();
    if (KeyEvent[e.key]) KeyEvent[e.key]();
  };
  return pressKey;
}
export default useKeyDown;
