import { useEffect, useState } from 'react';

import { getRecommendedKeywords } from 'apis/index';
import { isEmptyString } from 'utils/isEmptyString';

export interface Sick {
  sickCd: string;
  sickNm: string;
}

const useSearch = (keyword: string) => {
  const [recommendedKeywords, setRecommendedKeywords] = useState<Sick[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setRecommendedKeywords([]);

    if (!isEmptyString(keyword)) {
      const timer = setTimeout(() => {
        const getRecomendedKeywords = async () => {
          const data = await getRecommendedKeywords(keyword);
          setRecommendedKeywords(data);
        };
        getRecomendedKeywords();
        setIsLoading(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
    setIsLoading(false);
  }, [keyword]);

  return { recommendedKeywords, isLoading };
};

export default useSearch;
