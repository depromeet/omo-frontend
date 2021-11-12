import Image from 'next/image';
import React from 'react';

import { DetailPageProps } from '@pages/search/[id]';

import * as S from './styles';

type LocationCheckerProps = {
  store?: DetailPageProps;
  image: string;
  address: string;
  name: string;
  handleClickOnReselectLocation: () => void;
};

const LocationChecker = ({
  store,
  image,
  address,
  name,
  handleClickOnReselectLocation,
}: LocationCheckerProps) => {
  return (
    <S.LocationChecker>
      <S.TitleWrapper>
        <S.Title>
          이 <strong>장소</strong>가 맞나요?
        </S.Title>
        <S.ReselectBtn onClick={handleClickOnReselectLocation}>다시 선택하기</S.ReselectBtn>
      </S.TitleWrapper>

      <S.SelectedStorePreviewWrapper>
        <S.SelectedStoreInfo>
          <h1 className="title">{store?.name ?? name}</h1>
          <p className="address">{store?.address ?? address}</p>
        </S.SelectedStoreInfo>
        <S.SelectedStoreImageWrapper>
          <Image
            src={store?.image_url ?? image}
            alt="매장 프리뷰 이미지"
            layout="fixed"
            width={200}
            height={160}
          />
        </S.SelectedStoreImageWrapper>
      </S.SelectedStorePreviewWrapper>
    </S.LocationChecker>
  );
};

export default LocationChecker;
