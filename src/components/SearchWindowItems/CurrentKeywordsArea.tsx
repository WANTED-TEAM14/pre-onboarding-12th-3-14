import { styled } from 'styled-components';

import Message from 'components/common/Message';
import RecommendedKeyword from 'components/CurrentKeywordsAreaItema/RecommendedKeyword';
import { KeywordsProps } from 'components/SearchWindow';
import { isEmptyString } from 'utils/isEmptyString';

function CurrentKeywordsArea({
  keyword,
  focusedResult,
  recommendedKeywords,
  isLoading,
}: KeywordsProps) {
  const MAX_RESULT_LENGTH = 7;
  const shownRecommendedKeywords = recommendedKeywords.slice(0, MAX_RESULT_LENGTH);
  const ShowKeywordsLength = shownRecommendedKeywords.length;
  const isResultNotFound = !isLoading && ShowKeywordsLength === 0 && !isEmptyString(keyword);

  const renderRecommendedKeywords = () => {
    return shownRecommendedKeywords.map((recommendedKeyword, idx) => {
      return (
        <RecommendedKeyword
          key={recommendedKeyword.sickCd}
          recommendedKeyword={recommendedKeyword}
          isFocused={idx === focusedResult}
        />
      );
    });
  };

  return (
    <CurrentKeywordsAreaWrapper>
      <CurrentRecommendedKeywords>
        {isLoading ? <Message message='로딩 중...' /> : renderRecommendedKeywords()}
        {isResultNotFound && <Message message='관련 검색어 없음' />}
      </CurrentRecommendedKeywords>
    </CurrentKeywordsAreaWrapper>
  );
}
export default CurrentKeywordsArea;

const CurrentKeywordsAreaWrapper = styled.div`
  padding: 0 0 24px 0;
`;

const CurrentRecommendedKeywords = styled.ul``;
