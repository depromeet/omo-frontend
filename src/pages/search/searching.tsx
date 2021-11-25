import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { HeaderInput } from '@components/Header';
import SearchRecord from '@components/SearchRecord';
import { omakaseEachPageState, omakaseKeywordState } from '@recoil/omakaseState';

const Searching = () => {
  const { push } = useRouter();
  const setKeyword = useSetRecoilState(omakaseKeywordState);
  const setPages = useSetRecoilState(omakaseEachPageState);

  const searchStoresByText = (text: string) => {
    setKeyword(text);
    setPages({ ENTRY: 0, MIDDLE: 0, HIGH: 0 });
    push('/search');
  };

  useEffect(() => {
    return () => setKeyword('');
  }, [setKeyword]);

  return (
    <SearchingPage>
      <HeaderInput placeholder="위치/가게명을 검색해주세요." searchHandler={searchStoresByText} />
      <SearchingResult className="container">
        <SearchRecord searchStoresByText={searchStoresByText} />
      </SearchingResult>
    </SearchingPage>
  );
};

export default Searching;

const SearchingPage = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SearchingResult = styled.div`
  flex: 1;
  overflow: auto;
`;
