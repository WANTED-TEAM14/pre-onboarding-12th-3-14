import { styled } from 'styled-components';

import ScopeIcon from 'components/common/ScopeIcon';
import { Sick } from 'hooks/useSearch';

function CurrentRecommendedKeyword({ recommendedKeyword }: { recommendedKeyword: Sick }) {
  return (
    <CurrentRecommendedKeywordWrapper key={recommendedKeyword.sickCd}>
      <ScopeIcon />
      <div>{recommendedKeyword.sickNm}</div>
    </CurrentRecommendedKeywordWrapper>
  );
}
export default CurrentRecommendedKeyword;

const CurrentRecommendedKeywordWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  & svg {
    color: rgba(0, 0, 0, 0.2);
  }
`;
