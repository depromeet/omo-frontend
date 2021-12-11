import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import CloseIcon from '@assets/close.svg';
import SearchIcon from '@assets/search.svg';
import { SearchResultsWithPreventLinking } from '@components/SearchResults';
import { omakaseKeywordState } from '@recoil/omakaseState';

import * as S from './styles';

type SearchBottomActionSheetProps = {
  handleClickOnReselectLocation: () => void;
};

const SearchBottomActionSheet = ({
  handleClickOnReselectLocation,
}: SearchBottomActionSheetProps) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const setKeyword = useSetRecoilState(omakaseKeywordState);

  const handleChangeOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setSearchKeyword(value);
  };

  const handleClickOnSearchIcon = () => {
    setKeyword(searchKeyword);
  };

  const handleClickOnCloseBtn = () => {
    setSearchKeyword('');
    setKeyword('');
    handleClickOnReselectLocation();
  };

  return (
    <S.SearchBottomActionSheet>
      <S.TitleWrapper>
        <S.Title>장소변경</S.Title>
        <CloseIcon onClick={handleClickOnCloseBtn} />
      </S.TitleWrapper>

      <S.SearchInputBar>
        <input
          placeholder="위치/가게명을 검색해주세요."
          value={searchKeyword}
          onChange={handleChangeOnInput}
        />
        <SearchIcon onClick={handleClickOnSearchIcon} />
      </S.SearchInputBar>

      <S.SearchResults>
        <SearchResultsWithPreventLinking
          handleClickOnReselectLocation={handleClickOnReselectLocation}
        />
      </S.SearchResults>
    </S.SearchBottomActionSheet>
  );
};

export default SearchBottomActionSheet;
