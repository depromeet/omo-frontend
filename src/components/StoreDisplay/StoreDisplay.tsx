import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

export interface StoreDisplayProps {
  id: number;
  types: string[];
  image: string;
  name: string;
  desc: string;
}

const StoreDisplay = ({ id, image, types, name, desc }: StoreDisplayProps) => {
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
          </S.StoreImageWrapper>

          <S.StoreDescriptionWrapper>
            <h1 className="store-title">{name}</h1>
            <pre className="store-desc">{desc}</pre>
          </S.StoreDescriptionWrapper>
        </a>
      </Link>
    </S.StoreDisplay>
  );
};

export default StoreDisplay;
