import { styled } from 'styled-components';

import { isEmptyString } from '../utils/isEmptyString';

import CurrentKeyword from './SearchWindowItems/CurrentKeyword';
import CurrentKeywordsArea from './SearchWindowItems/CurrentKeywordsArea';
import RecomendedKeywordsArea from './SearchWindowItems/RecomendedKeywordsArea';

export interface Props {
  keyword: string;
  focusedResult: number;
}

function SerachWindow({ keyword, focusedResult }: Props) {
  return (
    <SerachWindowWrapper>
      {!isEmptyString(keyword) && <CurrentKeyword keyword={keyword} />}
      <CurrentKeywordsArea keyword={keyword} focusedResult={focusedResult} />
      {isEmptyString(keyword) && <RecomendedKeywordsArea />}
    </SerachWindowWrapper>
  );
}
export default SerachWindow;

const SerachWindowWrapper = styled.div`
  background-color: white;
  padding: 20px 0;
  border-radius: 21px;
  position: absolute;
  width: 530px;
  top: 315px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
`;
