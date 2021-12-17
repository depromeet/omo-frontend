import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

export interface VisitedStoreProps {
  id: number;
  name: string;
  image: string;
  date?: string;
}

const VisitedStore = ({ id, name, image, date }: VisitedStoreProps) => {
  return (
    <S.StoreDisplay>
      <Link href={`/search/${id}`} passHref>
        <a>
          <S.StoreImageWrapper>
            <Image src={image} alt="매장 이미지 미리보기" layout="fill" />
          </S.StoreImageWrapper>
          <S.StoreDescriptionWrapper>
            <h1 className="store-title">{name}</h1>
            {date && <pre className="store-desc">{date}</pre>}
          </S.StoreDescriptionWrapper>
        </a>
      </Link>
    </S.StoreDisplay>
  );
};

export default VisitedStore;
