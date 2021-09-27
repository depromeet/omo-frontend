import { DetailPageProps } from '@pages/search/[id]';

import * as S from './styles';

interface StoreDescriptionProps {
  store: DetailPageProps;
}

const StoreDescription = ({ store }: StoreDescriptionProps) => {
  return (
    <S.StoreDescription>
      <div className="content-wrapper">
        <h1 className="list title">{store.name}</h1>
        <pre className="list desc">{store.desc}</pre>
        <div className="list sub-contents">
          <p className="sub-title">위치 :</p>
          <p>{store.location}</p>
        </div>
        <div className="list sub-contents">
          <p className="sub-title">전화번호 :</p>
          <p>{store.tel}</p>
        </div>
        <div className="list sub-contents">
          <p className="sub-title">가격대 :</p>
          <p>{store.price}</p>
        </div>
        <div className="list hashtag-wrapper">
          {store.types.map((type) => (
            <S.HashTag key={type}>#{type}</S.HashTag>
          ))}
        </div>
      </div>

      <div className="button-wrapper">
        <S.Button onClick={() => alert('문의중...')}>예약 문의 하기</S.Button>
        <S.Button onClick={() => alert('깨는중...')} bgColor="#c9c9c9">
          이 가게 도장깨기
        </S.Button>
      </div>
    </S.StoreDescription>
  );
};

export default StoreDescription;
