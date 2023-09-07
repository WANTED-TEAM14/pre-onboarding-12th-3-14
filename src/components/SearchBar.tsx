import React from 'react';

import { styled } from 'styled-components';

import ScopeIcon from 'components/common/ScopeIcon';
import useKeyDown from 'hooks/useKeydown';
import { Sick } from 'hooks/useSearch';

export interface InputHandlerProps {
  recommendedKeywords: Sick[];
  keyword: string;
  isSearchBarFocused: boolean;
  focusedResult: number;
  setIsSearchBarFocused: React.Dispatch<React.SetStateAction<boolean>>;
  setFocuedResult: React.Dispatch<React.SetStateAction<number>>;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({
  recommendedKeywords,
  keyword,
  focusedResult,
  isSearchBarFocused,
  setIsSearchBarFocused,
  setKeyword,
  setFocuedResult,
}: InputHandlerProps) {
  const handleFocusInput = () => setIsSearchBarFocused(true);
  const handleBlurInput = () => setIsSearchBarFocused(false);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocuedResult(0);
    setKeyword(e.target.value);
  };

  const handleKeyDownKeywordsList = useKeyDown({
    recommendedKeywords,
    focusedResult,
    setFocuedResult,
    isSearchBarFocused,
    setIsSearchBarFocused,
  });

  return (
    <SearchBarWrapper>
      <ScopeIcon />
      <SearchBarInput
        type='text'
        placeholder={isSearchBarFocused ? '' : '질환명을 입력해 주세요.'}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDownKeywordsList}
        value={keyword}
      />
      <SearchBarButton type='button'>
        <ScopeIcon />
      </SearchBarButton>
    </SearchBarWrapper>
  );
}
export default SearchBar;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0 6px 0 0;
  border-radius: 42px;
  padding: 10px 10px 10px 24px;
  border: 2px solid transparent;
  &:focus-within {
    outline: 2px solid #007be9;
  }
`;

const SearchBarInput = styled.input`
  padding: 1px 25px 1px 2px;
  background-color: transparent;
  border: none;
  width: 400px;
  height: 25px;
  outline: none;
`;

const SearchBarButton = styled.button`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: #007be9;
  border: none;
  & div {
    color: white;
  }
`;
