import Button from '@components/Shared/Button';
import { HashTag } from '@components/StoreDescription/styles';

import * as S from './styles';

const SearchNoData = () => {
  return (
    <S.NoData>
      <div className="guide-message-wrapper">
        <p className="guide-message">검색결과가 없어요!</p>
        <p className="guide-message">혹시, 이런 검색어는 어떠세요?</p>
      </div>

      <div className="hashtag-wrapper">
        <HashTag>#강남구</HashTag>
        <HashTag>#강동구</HashTag>
        <HashTag>#미들</HashTag>
      </div>

      <div className="guide-message-wrapper">
        <p className="guide-message">원하는 오마카세를 찾지 못하셨나요?</p>
        <p className="guide-message">직접 제보해주세요!</p>
      </div>

      <Button clickListener={() => alert('제보')} text="오마카세 제보하기" bgColor="#C9C9C9" />
    </S.NoData>
  );
};

export default SearchNoData;
