import Image from 'next/image';
import { toast } from 'react-toastify';

import CopyIcon from '@assets/copy.svg';
import TelIcon from '@assets/telephone.svg';
import { Omakase } from '@recoil/omakaseState';

import * as S from './styles';
import { copyText } from '@utils/copyText';

interface StoreDescriptionProps {
  store: Omakase;
}

const checkIsCertificatedState = (state: boolean) =>
  state ? '/images/reviewed_certification.png' : '/images/reviewing_certification.png';

const StoreDescription = ({ store }: StoreDescriptionProps) => {
  return (
    <S.StoreDescription>
      <S.DescriptionHeaderWrapper>
        <S.DescriptionHeader>
          <h1 className="title">{store.name}</h1>
          <pre className="desc">{store.description}</pre>
          <div className="hashtag-wrapper">
            <S.HashTag>#{store.county}</S.HashTag>
            <S.HashTag>#{store.level}</S.HashTag>
          </div>
        </S.DescriptionHeader>
        {store.is_certification !== null && (
          <S.CertificationMark>
            <Image
              src={checkIsCertificatedState(store.is_certification)}
              alt="인증도장"
              layout="fill"
            />
          </S.CertificationMark>
        )}
      </S.DescriptionHeaderWrapper>

      <S.DescriptionMain>
        <S.DescriptionList>
          <div className="contents-wrapper">
            <p className="sub-title">주소</p>
            <p className="contents">{store.address}</p>
          </div>
          <CopyIcon onClick={() => copyText(store.address)} />
        </S.DescriptionList>
        <S.DescriptionList>
          <div className="contents-wrapper">
            <p className="sub-title">전화번호</p>
            <p className="contents">{store.phone_number}</p>
          </div>
          <CopyIcon onClick={() => copyText(store.phone_number)} />
          {/* <TelIcon /> */}
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
