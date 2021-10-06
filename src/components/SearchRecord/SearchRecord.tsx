import CloseIcon from '@assets/close_small.svg';
import { HashTag } from '@components/StoreDescription/styles';

import * as S from './styles';

const SearchRecord = () => {
  const handleClickOnHashTag = () => {
    alert('해당 태그를 최근 검색어 목록에서 제거합니다.');
  };

  return (
    <S.SearchRecord>
      <S.RecordArticle>
        <h1 className="sub-title">최근검색어</h1>
        <S.RecentRecords>
          <HashTag>
            <span>#강동</span>
            <span className="close" onClick={handleClickOnHashTag}>
              <CloseIcon />
            </span>
          </HashTag>
          <HashTag>
            <span>#강남</span>
            <span className="close" onClick={handleClickOnHashTag}>
              <CloseIcon />
            </span>
          </HashTag>
          <HashTag>
            <span>#강서</span>
            <span className="close" onClick={handleClickOnHashTag}>
              <CloseIcon />
            </span>
          </HashTag>
        </S.RecentRecords>
      </S.RecordArticle>
      <S.RecordArticle>
        <h1 className="sub-title">지역</h1>
        <S.RecentRecords>
          <HashTag>#강동</HashTag>
          <HashTag>#강남</HashTag>
          <HashTag>#동작</HashTag>
          <HashTag>#동대문</HashTag>
          <HashTag>#노원</HashTag>
          <HashTag>#용산</HashTag>
          <HashTag>#서대문</HashTag>
          <HashTag>#종로</HashTag>
        </S.RecentRecords>
      </S.RecordArticle>

      <S.MoreButton>+ 더 보기</S.MoreButton>
    </S.SearchRecord>
  );
};

export default SearchRecord;
