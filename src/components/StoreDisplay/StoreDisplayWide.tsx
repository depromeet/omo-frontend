import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';
import { StoreDisplayProps } from '.';

const StoreDisplay = ({ id, image_url, level, county, name, address }: StoreDisplayProps) => {
  return (
    <S.StoreDisplay>
      <Link href={`/search/${id}`} passHref>
        <a>
          <S.StoreImageWrapper>
            <S.SubTitles>
              <span>#{level}</span>
              <span>#{county}</span>
            </S.SubTitles>

            <Image src={image_url} alt="매장 이미지 미리보기" layout="fill" />

            <S.StoreDescriptionWrapper>
              <h1 className="store-title">{name}</h1>
              <p className="store-location">{address}</p>
            </S.StoreDescriptionWrapper>
          </S.StoreImageWrapper>
        </a>
      </Link>
    </S.StoreDisplay>
  );
};

export default StoreDisplay;
