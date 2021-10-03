import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

export interface VisitedStoreProps {
  id: number;
  image: string;
  name: string;
  date: string;
}

const VisitedStore = ({ id, image, name, date }: VisitedStoreProps) => {
  return (
    <S.StoreDisplay>
      <Link href={`/search/${id}`} passHref>
        <a>
          <S.StoreImageWrapper>
            <S.SubTitles>심사중</S.SubTitles>
            <Image src={image} alt="매장 이미지 미리보기" layout="fill" />
          </S.StoreImageWrapper>
          <S.StoreDescriptionWrapper>
            <h1 className="store-title">{name}</h1>
            <pre className="store-desc">도장 깬 날짜 : {date}</pre>
          </S.StoreDescriptionWrapper>
        </a>
      </Link>
    </S.StoreDisplay>
  );
};

export default VisitedStore;
