// 기본 찾기 페이지

import Layout from '@components/Layout';
import StoreDisplay from '@components/StoreDisplay';
import { StoreDisplayProps } from '@components/StoreDisplay/StoreDisplay';

import * as S from './styles';

const index = () => {
  return (
    <Layout title="오마카세 찾기">
      <S.SearchPage className="container">
        <S.SearchBar>
          <input type="text" placeholder="위치 / 가게명을 검색해보세요." />
        </S.SearchBar>

        {dummys.map((dummy) => (
          <StoreDisplay
            key={dummy.id}
            image={dummy.image}
            location={dummy.location}
            type={dummy.type}
            name={dummy.name}
            desc={dummy.desc}
          />
        ))}
      </S.SearchPage>
    </Layout>
  );
};

export default index;

const dummys: StoreDisplayProps[] = [
  {
    id: 1,
    image: `https://c2.poing.co.kr/place/image/thumbnail/MjAyMTA5/163100066261371856c2830.jpg`,
    location: `강남구`,
    type: `하이엔드`,
    name: `스시조`,
    desc: `오마카세 경력 25년의 셰프와 산지직송
제철 식자재의 정성이 담긴 요리`,
  },
  {
    id: 2,
    image: `https://c2.poing.co.kr/place/image/service/MjAyMTA5/163101073861373fb28a0a2.jpg`,
    location: `강남구`,
    type: `하이엔드`,
    name: `스시조어진`,
    desc: `오마카세 경력 25년의 셰프와 산지직송
제철 식자재의 정성이 담긴 요리`,
  },
  {
    id: 3,
    image: `https://c2.poing.co.kr/place/image/service/MjAyMTA5/1631000742613718a614ac5.jpg`,
    location: `은평구`,
    type: `하이엔드`,
    name: `조어진스시`,
    desc: `오마카세 경력 25년의 셰프와 산지직송
제철 식자재의 정성이 담긴 요리`,
  },
];
