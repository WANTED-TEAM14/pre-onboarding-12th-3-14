import { styled } from 'styled-components';

import CurrentKeyword from 'components/SearchWindowItems/CurrentKeyword';
import CurrentKeywordsArea from 'components/SearchWindowItems/CurrentKeywordsArea';
import RecomendedKeywordsArea from 'components/SearchWindowItems/RecomendedKeywordsArea';
import { isEmptyString } from 'utils/isEmptyString';

export interface Props {
  keyword: string;
  focusedResult: number;
}

function SearchWindow({ keyword, focusedResult }: Props) {
  return (
    <SearchWindowWrapper>
      {!isEmptyString(keyword) && <CurrentKeyword keyword={keyword} />}
      <CurrentKeywordsArea keyword={keyword} focusedResult={focusedResult} />
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
