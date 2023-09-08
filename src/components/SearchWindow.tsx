import { styled } from 'styled-components';

import CurrentKeyword from 'components/SearchWindowItems/CurrentKeyword';
import CurrentKeywordsArea from 'components/SearchWindowItems/CurrentKeywordsArea';
import RecomendedKeywordsArea from 'components/SearchWindowItems/RecomendedKeywordsArea';
import { Sick } from 'hooks/useSearch';
import { isEmptyString } from 'utils/isEmptyString';

export interface KeywordsProps {
  keyword: string;
  focusedResult: number;
  recommendedKeywords: Sick[];
  isLoading: boolean;
}

function SearchWindow({ keyword, focusedResult, recommendedKeywords, isLoading }: KeywordsProps) {
  return (
    <SearchWindowWrapper>
      {!isEmptyString(keyword) && <CurrentKeyword keyword={keyword} />}
      <CurrentKeywordsArea
        keyword={keyword}
        focusedResult={focusedResult}
        recommendedKeywords={recommendedKeywords}
        isLoading={isLoading}
      />
      {isEmptyString(keyword) && <RecomendedKeywordsArea />}
    </SearchWindowWrapper>
  );
}
export default SearchWindow;

const SearchWindowWrapper = styled.div`
  background-color: white;
  padding: 20px 0;
  border-radius: 21px;
  position: absolute;
  width: 530px;
  top: 315px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
`;
