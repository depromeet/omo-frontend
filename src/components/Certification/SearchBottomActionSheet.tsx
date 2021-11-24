import axios from 'axios';
import React, { useState } from 'react';

import CloseIcon from '@assets/close.svg';
import SearchIcon from '@assets/search.svg';
import { StoreDisplayList } from '@components/StoreDisplay';
import PreventLinkAction from '@lib/PreventLinkAction';
import { DetailPageProps } from '@pages/search/[id]';

import * as S from './styles';

type SearchBottomActionSheetProps = {
  setStore: React.Dispatch<React.SetStateAction<DetailPageProps | undefined>>;
  handleClickOnReselectLocation: () => void;
};

type Omakases = {
  total_elements: number;
  omakases: DetailPageProps[];
};

const SearchBottomActionSheet = ({
  handleClickOnReselectLocation,
  setStore,
}: SearchBottomActionSheetProps) => {
  const [searchWord, setSearchWord] = useState('');
  const [stores, setStores] = useState<DetailPageProps[]>([]);

  const handleChangeOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setSearchWord(value);
  };

  const handleClickOnSearchIcon = async (keyword: string) => {
    const {
      data: { omakases },
    } = await axios.get<Omakases>(`/api/omakases`);

    const searchingOmakases = omakases.filter((omakase) => omakase.name.includes(keyword));
    setStores(searchingOmakases);
  };

  const handleClickOnCloseBtn = () => {
    setSearchWord('');
    setStores([]);
    handleClickOnReselectLocation();
  };

  const handleClickOnNewStoreDisplay = (selectedStore: DetailPageProps) => {
    setStore(selectedStore);
    handleClickOnCloseBtn();
  };

  return (
    <S.SearchBottomActionSheet>
      <S.TitleWrapper>
        <S.Title>장소변경</S.Title>
        <CloseIcon onClick={handleClickOnCloseBtn} />
      </S.TitleWrapper>

      <S.SearchInputBar>
        <input value={searchWord} onChange={handleChangeOnInput} />
        <SearchIcon onClick={() => handleClickOnSearchIcon(searchWord)} />
      </S.SearchInputBar>

      <S.SearchResults>
        {!stores.length ? (
          <S.SearchNoData>데이터가 없을땐 무엇을 보여주어야 하지?</S.SearchNoData>
        ) : (
          stores.map((store) => (
            <PreventLinkAction
              key={store.id}
              onClickHandler={() => handleClickOnNewStoreDisplay(store)}
            >
              <StoreDisplayList
                id={store.id}
                image_url={store.image_url}
                level={store.level}
                county={store.county}
                name={store.name}
                address={store.address}
              />
            </PreventLinkAction>
          ))
        )}
      </S.SearchResults>
    </S.SearchBottomActionSheet>
  );
};

export default SearchBottomActionSheet;
