import CopyIcon from '@assets/copy.svg';
import TelIcon from '@assets/telephone.svg';
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
        <pre className="desc">{store.description}</pre>
        <div className="hashtag-wrapper">
          <S.HashTag>#{store.county}</S.HashTag>
          <S.HashTag>#{store.level}</S.HashTag>
        </div>
      </S.DescriptionHeader>

      <S.DescriptionMain>
        <S.DescriptionList>
          <div className="contents-wrapper">
            <p className="sub-title">주소</p>
            <p className="contents">{store.address}</p>
          </div>
          <CopyIcon />
        </S.DescriptionList>
        <S.DescriptionList>
          <div className="contents-wrapper">
            <p className="sub-title">전화번호</p>
            <p className="contents">{store.phone_number}</p>
          </div>
          <TelIcon />
        </S.DescriptionList>
        <S.DescriptionList>
          <div className="contents-wrapper">
            <p className="sub-title">가격대</p>
            <p className="contents">{store.price_information}</p>
          </div>
        </S.DescriptionList>
        <S.DescriptionList>
          <div className="contents-wrapper">
            <p className="sub-title">운영시간</p>
            <p className="contents">{store.business_hours}</p>
          </div>
        </S.DescriptionList>
      </S.DescriptionMain>
    </S.StoreDescription>
  );
};

export default StoreDescription;
