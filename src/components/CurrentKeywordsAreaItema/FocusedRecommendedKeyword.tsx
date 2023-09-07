import { styled } from 'styled-components';

import ScopeIcon from 'components/common/ScopeIcon';
import { Sick } from 'hooks/useSearch';

function FocusedRecommendedKeyword({ recommendedKeyword }: { recommendedKeyword: Sick }) {
  return (
    <FocusedRecommendedKeywordWrapper key={recommendedKeyword.sickCd}>
      <ScopeIcon />
      <div>{recommendedKeyword.sickNm}</div>
    </FocusedRecommendedKeywordWrapper>
  );
}
export default FocusedRecommendedKeyword;

const FocusedRecommendedKeywordWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  background-color: #eef8ff;
  & svg {
    color: rgba(0, 0, 0, 0.2);
  }
`;
