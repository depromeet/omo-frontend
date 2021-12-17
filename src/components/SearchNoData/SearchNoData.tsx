import Image from 'next/image';

import * as S from './styles';

// 제보하기 관련 모달 버튼 포함된 no-data 페이지 잠시 보류
interface SearchNoDataProps {
  keyword: string;
}

// const SearchNoData = ({ keyword }: SearchNoDataProps) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen((prev) => !prev);
//   };

//   return (
//     <S.NoData>
//       <div className="guide-message-wrapper">
//         <p className="guide-message">&quot;{keyword}&quot;에 대한 검색결과가 없어요!</p>
//         <p className="guide-message">혹시, 이런 검색어는 어떠세요?</p>
//       </div>

//       <div className="hashtag-wrapper">
//         <HashTag>#강남구</HashTag>
//         <HashTag>#강동구</HashTag>
//         <HashTag>#미들</HashTag>
//       </div>

//       <S.Divider />

//       <div className="guide-message-wrapper mt-30">
//         <p className="guide-message">원하는 가게를 찾지 못하셨나요?</p>
//         <p className="guide-message">오모에 제보해주세요!</p>
//       </div>

//       <Button clickListener={toggleModal} text="가게 제보하기" bgColor="#FFC737" color="#fff" />
//       {isModalOpen && <SuggestModal toggleModal={toggleModal} />}
//     </S.NoData>
//   );
// };

const SearchNoData = ({ keyword }: SearchNoDataProps) => {
  return (
    <S.NoData>
      <S.ImageWrapper>
        <Image src="/images/snowman.png" alt="마스코트" layout="fill" />
      </S.ImageWrapper>
      <S.NoDataMessage>{keyword}</S.NoDataMessage>
    </S.NoData>
  );
};

export default SearchNoData;
