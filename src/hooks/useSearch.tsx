import { useEffect, useState } from 'react';

import { getRecommendedKeywords } from 'apis/index';
import { isEmptyString } from 'utils/isEmptyString';

export interface Sick {
  sickCd: string;
  sickNm: string;
}

const useSearch = (debouncedKeyword: string) => {
  const [recommendedKeywords, setRecommendedKeywords] = useState<Sick[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setRecommendedKeywords([]);

    if (!isEmptyString(debouncedKeyword)) {
      const getRecomendedKeywords = async () => {
        const data = await getRecommendedKeywords(debouncedKeyword);
        setRecommendedKeywords(data);
      };
      getRecomendedKeywords();
      setIsLoading(false);
    }
    setIsLoading(false);
  }, [debouncedKeyword]);

  return { recommendedKeywords, isLoading };
};

export default useSearch;
