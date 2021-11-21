import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

export interface VisitedStoreProps {
  id: number;
  name: string;
  photo_url: string;
  county: string;
  create_date: string;
  is_certificated?: boolean;
}

const VisitedStore = ({
  id,
  name,
  photo_url,
  county,
  create_date,
  is_certificated,
}: VisitedStoreProps) => {
  return (
    <S.StoreDisplay>
      <Link href={`/search/${id}`} passHref>
        <a>
          <S.StoreImageWrapper>
            <Image src={photo_url} alt="매장 이미지 미리보기" layout="fill" />
          </S.StoreImageWrapper>
          <S.StoreDescriptionWrapper>
            <h1 className="store-title">{name}</h1>
            <pre className="store-desc">{create_date}</pre>
          </S.StoreDescriptionWrapper>
        </a>
      </Link>
    </S.StoreDisplay>
  );
};

export default VisitedStore;
