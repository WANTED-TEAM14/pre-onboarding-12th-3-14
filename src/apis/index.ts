import { BASE_URL } from 'constants/api';

import { getCachedData, setCachedData } from 'utils/cacheStorage';

export const getRecommendedKeywords = async (keyword: string) => {
  try {
    const queryUrl = `${BASE_URL}?q=${keyword}`;

    const cachedData = await getCachedData(BASE_URL, queryUrl);

    if (cachedData) return cachedData;

    const response = await fetch(queryUrl);
    const data = await response.json();
    await setCachedData(BASE_URL, queryUrl, data);
    console.info('calling api');

    return data;
  } catch (e) {
    throw new Error('검색어에 대한 결과를 가져오지 못했습니다.');
  }
};
