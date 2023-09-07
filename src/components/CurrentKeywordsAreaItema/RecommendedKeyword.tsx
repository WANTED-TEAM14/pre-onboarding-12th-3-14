import { styled } from 'styled-components';

import ScopeIcon from 'components/common/ScopeIcon';
import { Sick } from 'hooks/useSearch';

interface RecommendedKeywordProps {
  recommendedKeyword: Sick;
  isFocused: boolean;
}

function RecommendedKeyword({ recommendedKeyword, isFocused }: RecommendedKeywordProps) {
  return (
    <RecommendedKeywordWrapper key={recommendedKeyword.sickCd} $isFocused={isFocused}>
      <ScopeIcon />
      <div>{recommendedKeyword.sickNm}</div>
    </RecommendedKeywordWrapper>
  );
}
export default RecommendedKeyword;

const RecommendedKeywordWrapper = styled.li<{ $isFocused: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.5rem 24px;

  background-color: ${({ $isFocused }) => ($isFocused ? '#eef8ff' : 'white')};
  & svg {
    color: rgba(0, 0, 0, 0.2);
  }
`;
