import { useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import styled from 'styled-components';

import { HeaderInput } from '@components/Header';
import SearchNoData from '@components/SearchNoData';
import SearchRecord from '@components/SearchRecord';
import StoreDisplay from '@components/StoreDisplay';
import { Omakases, currentOmakasesListQuery } from '@recoil/omakaseState';

const Searching = () => {
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [keyword, setKeyword] = useState('');
  const { state, contents } = useRecoilValueLoadable(currentOmakasesListQuery({ keyword }));

  const searchStoresByText = (text: string) => {
    setIsSearched(true);
    setKeyword(text);
  };

  if (state === 'loading') return '...loading';

  const omakases = contents as Omakases[];

  return (
    <SearchingPage>
      <HeaderInput placeholder="위치/가게명을 검색해주세요." searchHandler={searchStoresByText} />
      <SearchingResult className="container">
        {omakases?.length ? (
          <SearchingData>
            {omakases.map((omakase) => (
              <StoreDisplay
                key={omakase.id}
                id={omakase.id}
                level={omakase.level}
                county={omakase.county}
                image_url={omakase.image_url}
                name={omakase.name}
                address={omakase.address}
              />
            ))}
          </SearchingData>
        ) : isSearched ? (
          <SearchNoData keyword={keyword} />
        ) : (
          <SearchRecord />
        )}
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

const SearchingData = styled.div`
  margin-top: 20px;
`;
