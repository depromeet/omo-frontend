import { useState } from 'react';
import styled from 'styled-components';

import { HeaderInput } from '@components/Header';
import SearchNoData from '@components/SearchNoData';
import { HashTag } from '@components/StoreDescription/styles';
import StoreDisplay from '@components/StoreDisplay';
import { dummys } from '@temp/SearchListDummy';

import { DetailPageProps } from './[id]';

const Searching = () => {
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [stores, setStores] = useState<DetailPageProps[]>([]);

  const tempGetStoresByText = (text: string) => {
    const stores = dummys.filter((dummy) => dummy.name.includes(text));
    setIsSearched(true);
    setStores(stores);
  };

  return (
    <SearchingPage>
      <HeaderInput placeholder="위치/가게명을 검색해주세요." serachHandler={tempGetStoresByText} />
      <SearchingData className="container">
        {stores?.length ? (
          stores.map((store) => (
            <StoreDisplay
              key={store.id}
              id={store.id}
              types={store.types}
              image={store.image}
              name={store.name}
              desc={store.desc}
            />
          ))
        ) : isSearched ? (
          <SearchNoData />
        ) : (
          <RecentSeachedTexts>
            <HashTag>#은평구</HashTag>
            <HashTag>#강남구</HashTag>
            <HashTag>#강서구</HashTag>
            <HashTag>#강동구</HashTag>
            <HashTag>#하이엔드</HashTag>
            <HashTag>#미들</HashTag>
            <HashTag>#라이트</HashTag>
          </RecentSeachedTexts>
        )}
      </SearchingData>
    </SearchingPage>
  );
};

export default Searching;

const SearchingPage = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SearchingData = styled.div`
  flex: 1;
  overflow: auto;
`;

const RecentSeachedTexts = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
