# 원티드 프리온보딩 프론트엔드 12기 Week 3 과제 - 임상 시험 사이트 검색창 구현

## 1. Team14 팀원 프로필

| <img src="https://avatars.githubusercontent.com/ha-il" width=150px><br />[김형우](https://github.com/ha-il)(팀장) | <img src="https://avatars.githubusercontent.com/NEARworld" width=150px><br />[신승식](https://github.com/NEARworld) | <img src="https://avatars.githubusercontent.com/somin00" width=150px><br />[오소민](https://github.com/somin00) |
| :---------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
|                                      검색창 UI </br> 검생창 키보드 이동 기능                                      |                                                 디바운싱 </br> 배포                                                 |                                                    로컬 캐싱                                                    |

## 2. 디렉터리 구조

```shell
 ├ .husky # git hook 설정 자동화를 위한 husky 설정
 ├ src
 │ ├ apis # 검색 결과 API 요청 설정
 │ ├ components
 │ │ ├ CurrentKeywordsAreaItema
 │ │ │ └ RecommendedKeyword.tsx # 현재 검색어로 검색된 추천 검색어를 렌더링하는 컴포넌트
 │ │ ├ SearchWindowItems
 │ │ │ ├ CurrentKeyword.tsx # 현재 검색 중인 단어를 렌더링하는 컴포넌트
 │ │ │ ├ CurrentKeywordsArea.tsx # 현재 검색어의 결과를 렌더링하는 컴포넌트
 │ │ │ └ RecomendedKeywordsArea.tsx # 기존의 추천 검색어를 렌더링하는 컴포넌트
 │ │ ├ common # 돋보기 아이콘, 메시지 등 공용으로 사용되는 컴포넌트 폴더
 │ │ ├ SearchBar.tsx # 검색 바 컴포넌트
 │ │ └ SearchWindow.tsx # 검색 창 컴포넌트
 │ ├ constants # 베이스 URL, 캐시 스토리지 등 상수 변수 관련 폴더
 │ ├ hooks
 │ │ ├ useDebounce.ts # 디바운싱 로직 관련 커스텀 훅
 │ │ ├ useKeydown.tsx # 키보드 이벤트 관련 커스텀 훅
 │ │ └ useSearch.tsx # 검색 결과를 받아오는 커스텀 훅
 │ ├ utils
 │ │ ├ cacheStorage.ts # 로컬 캐싱 관련 함수 파일
 │ │ └ isEmptyString.ts # 빈 문자열 판별 함수 파일
 │ ├ App.css
 │ ├ App.tsx
 │ ├ index.css
 │ ├ index.tsx
 │ └ react-app-env.d.ts
 ├ .eslintrc # 코드 스타일 통일을 위한 esLint 설정
 └ .prettierrc # 코드 포맷팅을 위한 prettier 설정
```

## 3. 추가한 라이브러리

| 목적      | 이름                                   | 버전    | 링크                                                                                                                                         |
| --------- | -------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 스타일    | styled-components                      | ^6.0.7  | [https://www.npmjs.com/package/styled-components](https://www.npmjs.com/package/styled-components)                                           |
| 환경 설정 | eslint                                 | ^8.48.0 | [https://www.npmjs.com/package/eslint](https://www.npmjs.com/package/eslint)                                                                 |
| 환경 설정 | prettier                               | ^3.0.3  | [https://www.npmjs.com/package/prettier](https://www.npmjs.com/package/prettier)                                                             |
| 환경 설정 | husky                                  | ^8.0.3  | [https://www.npmjs.com/package/husky](https://www.npmjs.com/package/husky)                                                                   |
| 환경 설정 | lint-staged                            | ^14.0.1 | [https://www.npmjs.com/package/lint-staged](https://www.npmjs.com/package/lint-staged)                                                       |
| 환경 설정 | eslint-plugin-no-relative-import-paths | ^1.5.2  | [https://www.npmjs.com/package/eslint-plugin-no-relative-import-paths](https://www.npmjs.com/package/eslint-plugin-no-relative-import-paths) |

<br />

## 4. 프로젝트 배포 링크

**배포 링크**: [https://bejewelled-cucurucho-100b86.netlify.app/](https://bejewelled-cucurucho-100b86.netlify.app/)

<br />

## 5. 개발 환경에서 프로젝트 실행 방법

1. 터미널에서 이 저장소를 git clone 하거나, 이 저장소의 파일을 다운받아 압축을 해제한 뒤 터미널로 열어주세요.
   <br/>
2. 터미널에 아래와 같이 명령어를 입력합니다.

   ```
   # git clone 한 경우
   cd pre-onboarding-12th-3-14

   # 파일을 다운받은 경우
   cd pre-onboarding-12th-3-14-main
   ```

3. 터미널에 `npm install`을 입력하여 의존성을 설치합니다.
   <br/>

4. `src/constants/api.ts`파일에서 `BASE_URL`을 아래와 같이 수정해주세요.
   <br/>

   ```typescript
   export const BASE_URL = 'http://localhost:4000/sick';
   ```

   <br/>

5. [assignment-api](https://github.com/walking-sunset/assignment-api) 깃헙 저장소를 참고하여 로컬 서버를 실행해주세요.
   <br/>

6. `npm start`를 입력하여 애플리케이션을 실행합니다.
   <br />

## 6. 데모 영상 & 이미지

### 6.1 검색창 UI & 검색창 키보드 이동 기능

|                                             검색창 UI & 검색창 키보드 이동 기능                                              |
| :--------------------------------------------------------------------------------------------------------------------------: |
|                  검색바 클릭 → 검색창 렌더링 → 검색어 입력 → </br>추천 검색어 렌더링 → 키보드로 검새어 이동                  |
| ![keyborad](https://github.com/WANTED-TEAM14/pre-onboarding-12th-3-14/assets/108077643/e5ae5d65-6c4c-4a1a-9165-c6f6f1839b32) |

### 6.2 API 호출 횟수 디바운싱 & 로컬 캐싱

|                                                        이슈 목록 페이지                                                        |
| :----------------------------------------------------------------------------------------------------------------------------: |
|         콘솔을 통해 API 호출이 디바운싱 되고 있음을 확인. </br> 로컬 캐싱으로 같은 검색어 입력할 경우 API 호출 안 함.          |
| ![debouncing](https://github.com/WANTED-TEAM14/pre-onboarding-12th-3-14/assets/108077643/5d8353a5-26ee-40ec-86e9-17a00d2b7c8c) |

### 6.3 캐시 스토리지 활용

|                                                                 캐시 스토리지 활용                                                                  |
| :-------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                     API 요청이 발생할 경우 Clinic-trials-search 캐시 스토리지에 결과가 저장됨.                                      |
| <img alt=caching src="https://github.com/WANTED-TEAM14/pre-onboarding-12th-3-14/assets/108077643/791d59f7-8247-41c1-ac20-d425613f7004" width=480px> |

## 7. Best Practice 도출 과정

### 7.1 Best Practice 도출 방식

팀원들이 각자의 개인 과제를 수행하고, 그 중 가장 충실히 기능을 구현한 결과물을 선정했습니다.
디스코드의 화면 공유 기능을 활용해 팀원들과 함께 선정된 결과물을 리뷰하면서 각 기능 별 Best Practice를 도출했습니다.

### 7.2 개인 과제 발표 후 기능 구현이 충실한 결과물 선정

자신이 구현해온 개인 과제에서 어떤 점을 중점적으로 고려했는지 설명하는 시간을 가지고, 기능 구현이 충실한 결과물 선정했습니다.

| 이름   | 의견                                                                                                                                                                                                        |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 김형우 | **Best Practice: 오소민**</br> - 키보드 이벤트 핸들링이 버그 없이 잘 이뤄지고 있다.</br> - 캐쉬 스토리지 expired 기간 설정이 잘 이뤄진 것 같다.</br> - 컴포넌트 분리가 직관적이어서 코드를 이해하기 쉬웠다. |
| 신승식 | **Best Practice: 김형우**</br> - 임상 정보 사이트 클론이 잘 되어 있음. </br> - 캐쉬 스토리지를 깔끔하게 사용했다.                                                                                           |
| 오소민 | **Best Practice: 김형우**</br> - 캐쉬 스토리지를 검색어마다 생성하는 것이 아니라 하나의 스토리지에 여러개를 저장하는 방식이 깔끔하다.</br> - 검색 시 로딩 상태를 보여주는 기능이 좋다.                      |

### 7.3 API 호출별로 로컬 캐싱 구현

- **로컬 캐싱 구현 전략**: 캐시 스토리지
  </br>
- **전략 선정 이유**

  - 로컬 스토리지는 데이터 만료 기한이 따로 없고, 세션 스토리지의 경우 페이지를 닫을 때 만료되기 때문에 expire time을 구현하기 어렵다고 판단했다.
  - 캐시 스토리지의 경우 expire time을 구현하기 적합하다고 판단했다.
    </br>

- **로컬 캐싱의 Best Practice**

  - 캐시 스토리지의 이름을 홈페이지 URL로 하는 경우도 있으나, 이번 프로젝트에 맞게 `Clinic-trials-search`라는 이름으로 캐시 스토리지가 생성되도록 설정했다.
  - 선정된 개인 과제에서는 클래스 형태로 작성했으나, 클래스의 메서드를 사용하는 방식이 연쇄적이어서 함수로 작성하는 것이 더 낫다고 판단하여 함수형으로 리팩터링했다.
  - 기존에는 API 호출 후에 로컬 캐싱이 이뤄지는 로직이 useSearch라는 훅 안에서 동시에 이뤄졌는데, 로컬 캐싱 관련 로직을 API 호출 로직과 같이 다루는 것이 관심사의 중복으로 판단되어 분리하기로 했다.
    </br>

- **expire time 구현 로직**

  ```typescript
  // src/utils/cacheStorage.ts
  // expire time 로직을 구현한 checkIsExpired 함수
  export const checkIsExpired = (cacheResponse: Response) => {
    const cachedData = cacheResponse.headers.get(HEADER_FETCH_DATE);

    if (!cachedData) return;

    const cacheDataDate = new Date(cachedData).getTime();
    const today = new Date().getTime();
    return today - cacheDataDate > EXPIRE_TIME;
  };

  // checkIsExpired 함수를 호출하는 getCachedData 함수
  export const getCachedData = async (cacheName: string, url: string) => {
    try {
      const cache = await caches.open(cacheName);
      const cachedResponse = await cache.match(url);

      if (!cachedResponse || !cachedResponse.ok) return false;

      if (checkIsExpired(cachedResponse)) {
        await cache.delete(url);
        return null;
      }

      return await cachedResponse.json();
    } catch (error) {
      return false;
    }
  };
  ```

  </br>

- **팀원 의견 교류 내용**

  | 이름   | 의견                                                                                                                                                                                                                                                                                                                                                                        |
  | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | 김형우 | - 로컬 스토리지, 세션 스토리지, 캐시 스토리지 중에서 고민했다. </br> - 로컬스토리지의 데이터는 만료되지 않아서 expire time을 구현해야 하는 이번 과제에는 적합하지 않다고 판단했다. </br> - 세션 스토리지는 페이지를 닫을 때 사라지기 때문에 만료 기간을 설정할 수 없어 적합하지 않다고 판단했다. </br> - 캐시 스토리지의 경우 expire time 구현에 적합할 것 같아서 선정했다. |
  | 신승식 | - 함수형으로 작성하자. 로직 파악이 쉽다.                                                                                                                                                                                                                                                                                                                                    |
  | 오소민 | - 브라우저 내장 기능이기 때문에 별도의 라이브러리가 필요 없고, 로컬스토리지나 세션스토리지의 경우 5MB 크기의 문자열만 저장 가능하기 때문에 캐시스토리지가 적절하다고 판단했다.                                                                                                                                                                                              |

### 7.4 디바운싱: 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략

- **API 호출 횟수를 줄이는 전략**: 디바운싱
  </br>
- **전략 선정 이유**

  - 사용자의 입력이 언제 끝날지 모르기때문에 연이어 호출되는 함수들 중 마지막 호출을 감지하는 것이 맞다고 판단하여 디바운싱을 선택했다.
  - 일정 시간이 지난 순간의 마지막 호출을 감지하기 위해 `setTimeout`으로 디바운싱을 구현하는 방법을 선택했다.
  - 리액트의 `useDeferredValue` 훅은 현재 프로젝트에 적용하면 오히려 불필요한 렌더링을 발생시켰고, `loadash`의 `debounce` 메서드도 고려 대상이었으나 해당 기능을 직접 구현하는 것이 과제 취지에 맞다고 생각하여 `setTimeout`으로 api 요청을 지연하는 방식을 택했다.
    </br>

- **디바운싱의 Best Practice**

  - 선정된 개인 과제에서는 `useSearch`라는 검색 결과 요청 커스텀 훅에 `setTimeout`을 사용하여 디바운싱을 구현했으나, `useSearch`라는 훅이 디바운싱에 대한 로직까지 가지고 있는 것은 관심사 중복이다.
  - 따라서 `useSearch`라는 훅에서 디바운싱 로직을 분리하고 커스텀 훅으로 만들어야 한다.
  - 디바운싱 속도를 500ms는 사용자 입장에서 꽤 느리다. 300ms로 수정했으면 좋겠다.
    </br>

- **디바운싱 구현 로직**

  ```typescript
  // src/hooks/useDebounce.ts
  // 디바운싱을 구현한 useDebounce 훅
  import { useEffect, useState } from 'react';

  const DELAY_TIME = 300;

  export const useDebounce = (keyword: string) => {
    const [debouncedValue, setDebouncedValue] = useState<string>(keyword);

    useEffect(() => {
      const debounceTimer = setTimeout(() => setDebouncedValue(keyword), DELAY_TIME);

      return () => clearTimeout(debounceTimer);
    }, [keyword]);

    return { debouncedValue };
  };
  ```

  ```typescript
  // src/App.tsx
  //
  function App() {
    const [keyword, setKeyword] = useState('');
    // useDebounce를 호출하여 인풋 검색어의 상태값인 keyword를 전달
    const { debouncedValue } = useDebounce(keyword);
    // 검색어를 디바운싱시켜서 useSearch훅에 전달하여 API 요청을 보냄
    const { recommendedKeywords, isLoading } = useSearch(debouncedValue);
    // 코드 생략...
  }
  ```

  </br>

- **팀원 의견 교류 내용**
  | 이름 | 의견 |
  | --- | --- |
  | 김형우 | - [useDeferredValue](https://react.dev/reference/react/useDeferredValue)라는 리액트 훅을 사용해보려 했으나, useDeferredValue에 전달하는 값은 문자열 및 숫자와 같은 원시값이거나 렌더링 외부에서 생성된 객체여야 한다는 공식 문서 내용이 있었다.<br/> - 현재 프로젝트에서는 state인 keyword를 기준으로 API를 호출하고 UI를 렌더링하고 있기 때문에, useDeferredValue를 사용하면 렌더링할 때마다 값이 달라져 불필요한 백그라운드 재렌더링이 발생할 수 있어서 이번 프로젝트에서는 사용하기 어려웠다. <br/> - loadash의 debounce 메서드도 사용할 수 있었으나, 디바운싱을 구현해야하는 이번 과제에서 메서드 하나로 구현하는 것은 적합하지 않다고 판단했다. <br/> - 따라서 setTimeout을 이용해서 로직을 직접 구현하여 제출하는 것이 이번 과제 취지에 적합하다고 판단했다.
  | 신승식| - 검색어가 바뀔때마다 매번 서버에 api 요청을 보내기보다 특정 시간이 지난 후에만 서버에 api 요청을 보내도록 하기 위해 setTimeout으로 api 요청을 지연하는 방식을 택했다. |
  | 오소민 | - 사용자의 입력이 언제 끝날지 모르기때문에 연이어 호출되는 함수들 중 마지막 호출을 감지하는 것이 맞다고 판단하여 디바운싱을 선택했다.<br/> - 일정 시간이 지난 순간의 마지막 호출을 감지하기 위해 setTimeout으로 디바운싱을 구현하는 방법을 선택했다. |

### 7.5 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- **키보드 이동 구현 전략**

  - 검색 결과에서 현재 포커싱 중인 항목의 인덱스를 표현하는 `focusedResult`라는 상태값을 사용하여, 키보드를 누를 때마다 `focusedResult`를 1씩 증가/감소시키는 방식으로 추천 검색어 사이를 이동할 수 있게 구현했다.
    </br>

- **키보드 이동 구현 전략 BestPractice**

  - 선정된 개인 프로젝트의 경우 아래 방향키를 눌렀을 때 맨 처음에만 포커싱이 두 번씩 이동하고 있다.
  - 이는 크롬 브라우저에서 한글이 조합 문자이기 때문에 글자가 조합 중인지, 조합이 끝난 상태인지를 알 수 없어서 발생하는 문제이다.
  - 이벤트 객체의 nativeEvent.isComposing 속성을 활용하여 수정하자.
  - 위/아래 방향키 이벤트만 넣지 말고 esc 누르면 UI 상에서 검색창이 사라지도록 수정하자.
  - 키보드 이벤트의 경우 여러 키로 발생이 되기 때문에 객체로 만들어서 입력 키 별로 객체의 메서드를 실행하는 방식으로 수정하자.
    </br>

- **키보드 이동 구현 로직**

  ```typescript
  // src/hooks/useKeydown.tsx
  // KeyDown 이벤트 발생 시 입력 키 별로 다른 동작을 설정하고 해당 동작을 반환하는 useKeydown 커스텀훅
  function useKeyDown({
    recommendedKeywords,
    focusedResult,
    setFocuedResult,
    isSearchBarFocused,
    setIsSearchBarFocused,
  }: KeyDownHandlerProps) {
    const resultFirstIndex = 0;
    const resultLastIndex = recommendedKeywords.length - 1;
    const KeyEvent: KeyEventType = {
      // 입력 키마다 다른 동작을 설정
      ArrowDown: () => {
        if (focusedResult < resultLastIndex) setFocuedResult(prev => prev + 1);
      },

      ArrowUp: () => {
        if (focusedResult > resultFirstIndex) setFocuedResult(prev => prev - 1);
      },

      Escape: () => {
        if (isSearchBarFocused) {
          setIsSearchBarFocused(false);
        }
      },
    };

    const pressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.nativeEvent.isComposing) return;
      if (e.key === 'Escape') e.currentTarget.blur();
      // 입력 키를 인수로 받는 KeyDown 이벤트 핸들러 함수 반환함
      if (KeyEvent[e.key]) KeyEvent[e.key]();
    };
    return pressKey;
  }
  export default useKeyDown;
  ```

  ```tsx
  // src/components/SearchBar.tsx

  function SearchBar({
    recommendedKeywords,
    focusedResult,
    isSearchBarFocused,
    setIsSearchBarFocused,
    setFocuedResult,
  }: InputHandlerProps) {
    // useKeyDown() 호출하여 input KeyDown 이벤트 핸들러 함수 반환
    const handleKeyDownKeywordsList = useKeyDown({
      recommendedKeywords,
      focusedResult,
      setFocuedResult,
      isSearchBarFocused,
      setIsSearchBarFocused,
    });

    return (
      // input의 onKeyDown에 반환 받은 이벤트 핸들러 함수 전달
      <SearchBarInput type='text' onKeyDown={handleKeyDownKeywordsList} />
      // 코드 생략...
    );
  }
  export default SearchBar;
  ```

  </br>

- **팀원 의견 교류 내용**

  | 이름   | 의견                                                                                                                                                                                                                                                                                                                                                    |
  | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | 김형우 | - `focusedResult`의 최대 값이 화면에 노출되는 결과물 수 7개에 맞춰져 있다보니, 7개 보다 적은 결과물이 나오면 포커싱이 사라지는 버그를 발견했다.</br> - 해당 버그를 수정하기 위해 검색 결과를 담은 배열의 길이를 useKeyDown 커스텀 훅에 전달해줘야 할 것 같다.                                                                                           |
  | 신승식 | - 렌더링 횟수를 줄여야하므로 소민님의 의견을 반영하는게 옳다고 생각했다.                                                                                                                                                                                                                                                                                |
  | 오소민 | - 크롬 브라우저에서 한글이 자음과 모음의 조합 문자이기 때문에 글자가 조합 중인지, 조합이 끝난 상태인지를 알 수 없기 때문에 첫번째 KeyDown 이벤트가 중복으로 발생한다. 이 문제는 입력 문자가 조합 문자인지 아닌지를 boolean 값으로 나타내는 isComposing을 이용하여 해결하면 될 것 같다.</br>- 키보드 이벤트 탈출하는 기능을 위해 ESC 키 추가하면 좋겠다. |
