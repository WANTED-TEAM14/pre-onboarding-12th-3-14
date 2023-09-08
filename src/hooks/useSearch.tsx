import { useEffect, useState } from 'react';

import { getRecommendedKeywords } from 'apis/index';
import { isEmptyString } from 'utils/isEmptyString';

export interface Sick {
  sickCd: string;
  sickNm: string;
}

const useSearch = (debouncedKeyword: string, keyword: string) => {
  const [recommendedKeywords, setRecommendedKeywords] = useState<Sick[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEmptyString(keyword)) {
      setIsLoading(false);
      setRecommendedKeywords([]);
    } else {
      setIsLoading(true);
    }
  }, [keyword]);

  useEffect(() => {
    if (!isEmptyString(debouncedKeyword)) {
      const getRecomendedKeywords = async () => {
        const data = await getRecommendedKeywords(debouncedKeyword);
        setRecommendedKeywords(data);
        if (data) setIsLoading(false);
      };
      getRecomendedKeywords();
    }
  }, [debouncedKeyword]);

  return { recommendedKeywords, isLoading };
};

export default useSearch;
