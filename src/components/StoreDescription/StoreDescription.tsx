import CopyIcon from '@assets/copy.svg';
import FavoriteIcon from '@assets/favorite.svg';
import TelIcon from '@assets/telephone.svg';
import { Divider } from '@components/SearchNoData/styles';
import Button from '@components/Shared/Button';
import { DetailPageProps } from '@pages/search/[id]';

import * as S from './styles';

interface StoreDescriptionProps {
  store: DetailPageProps;
}

const StoreDescription = ({ store }: StoreDescriptionProps) => {
  return (
    <S.StoreDescription>
      <S.DescriptionHeader>
        <h1 className="title">{store.name}</h1>
        <pre className="desc">{store.desc}</pre>
        <div className="hashtag-wrapper">
          {store.types.map((type) => (
            <S.HashTag key={type}>#{type}</S.HashTag>
          ))}
        </div>
      </S.DescriptionHeader>

      <Divider />

      <S.DescriptionMain>
        <S.DescriptionList>
          <div className="contents-wrapper">
            <p className="sub-title">주소</p>
            <p className="contents">{store.location}</p>
          </div>
          <CopyIcon />
        </S.DescriptionList>
        <S.DescriptionList>
          <div className="contents-wrapper">
            <p className="sub-title">전화번호</p>
            <p className="contents">{store.tel}</p>
          </div>
          <TelIcon />
        </S.DescriptionList>
        <S.DescriptionList>
          <div className="contents-wrapper">
            <p className="sub-title">가격대</p>
            <p className="contents">{store.price}</p>
          </div>
        </S.DescriptionList>
        <S.DescriptionList>
          <div className="contents-wrapper">
            <p className="sub-title">운영시간</p>
            <p className="contents">{store.time}</p>
          </div>
        </S.DescriptionList>
      </S.DescriptionMain>

      <div className="button-wrapper">
        <S.LikeButton onClick={() => alert('좋아요!')}>
          <FavoriteIcon />
          <span className="count">125</span>
        </S.LikeButton>
        <Button
          clickListener={() => alert('문의중')}
          color="#fff"
          bgColor="#293AD2"
          text="이 가게 도장깨기"
        />
      </div>
    </S.StoreDescription>
  );
};

export default StoreDescription;
