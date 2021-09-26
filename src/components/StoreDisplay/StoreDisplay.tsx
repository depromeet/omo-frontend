import Image from 'next/image';

import * as S from './styles';

export interface StoreDisplayProps {
  id?: number;
  image: string;
  location: string;
  type: string;
  name: string;
  desc: string;
}

const StoreDisplay = ({ image, location, type, name, desc }: StoreDisplayProps) => {
  return (
    <S.StoreDisplay>
      <S.StoreImageWrapper>
        <S.SubTitles>
          <span>{location}</span>
          <span>{type}</span>
        </S.SubTitles>

        <Image src={image} alt="매장 이미지 미리보기" layout="fill" />
      </S.StoreImageWrapper>

      <S.StoreDescriptionWrapper>
        <h1 className="store-title">{name}</h1>
        <pre className="store-desc">{desc}</pre>
      </S.StoreDescriptionWrapper>
    </S.StoreDisplay>
  );
};

export default StoreDisplay;
