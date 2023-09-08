import { useEffect, useState } from 'react';

import CacheApiServer from 'apis/CacheApiServer';
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
    if (!isEmptyString(debouncedKeyword)) {
      const getRecomendedKeywords = async () => {
        const data = await CacheApiServer.getRecommendedKeword(debouncedKeyword);
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
