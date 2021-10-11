import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';
import { StoreDisplayProps } from '.';

const StoreDisplay = ({ id, image, types, name, location }: StoreDisplayProps) => {
  return (
    <S.StoreDisplay>
      <Link href={`/search/${id}`} passHref>
        <a>
          <S.ListDescriptionWrapper>
            <S.StoreImageWrapper className="mode-list">
              <Image
                src={image}
                alt="매장 이미지 미리보기"
                width={200}
                height={160}
                layout="fixed"
              />
            </S.StoreImageWrapper>

            <S.ListDescription>
              <S.SubTitles>
                {types.map((type) => (
                  <span key={type}>#{type}</span>
                ))}
              </S.SubTitles>

              <S.StoreDescriptionWrapper>
                <h1 className="store-title">{name}</h1>
                <p className="store-location">{location}</p>
              </S.StoreDescriptionWrapper>
            </S.ListDescription>
          </S.ListDescriptionWrapper>
        </a>
      </Link>
    </S.StoreDisplay>
  );
};

export default StoreDisplay;
