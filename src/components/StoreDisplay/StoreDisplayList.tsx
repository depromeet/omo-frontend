import Image from 'next/image';
import Link from 'next/link';

import { Omakases } from '@recoil/omakaseState';

import * as S from './styles';

const StoreDisplay = ({ id, image_url, level, county, name, address }: Omakases) => {
  return (
    <S.StoreDisplay>
      <Link href={`/search/${id}`} passHref>
        <a>
          <S.ListDescriptionWrapper>
            <S.ListDescription>
              <S.SubTitles>
                <span>#{level}</span>
                <span>#{county}</span>
              </S.SubTitles>
              <h1 className="store-title">{name}</h1>
              <p className="store-location">{address}</p>
            </S.ListDescription>

            <S.StoreImageWrapper className="mode-list">
              <Image
                src={image_url}
                alt="매장 이미지 미리보기"
                width={200}
                height={160}
                layout="fixed"
              />
            </S.StoreImageWrapper>
          </S.ListDescriptionWrapper>
        </a>
      </Link>
    </S.StoreDisplay>
  );
};

export default StoreDisplay;
