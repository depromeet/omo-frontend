import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';
import { StoreDisplayProps } from '.';

const StoreDisplay = ({ id, image, types, name, location }: StoreDisplayProps) => {
  return (
    <S.StoreDisplay>
      <Link href={`/search/${id}`} passHref>
        <a>
          <S.StoreImageWrapper>
            <S.SubTitles>
              {types.map((type) => (
                <span key={type}>#{type}</span>
              ))}
            </S.SubTitles>

            <Image src={image} alt="매장 이미지 미리보기" layout="fill" />

            <S.StoreDescriptionWrapper>
              <h1 className="store-title">{name}</h1>
              <p className="store-location">{location}</p>
            </S.StoreDescriptionWrapper>
          </S.StoreImageWrapper>
        </a>
      </Link>
    </S.StoreDisplay>
  );
};

export default StoreDisplay;
