import styled from 'styled-components';

import Guidance from '@assets/guidance.svg';
import Layout from '@components/Layout';
import RankingProfile from '@components/RankerProfile/RankingProfile';
import RankingBar from '@components/RankingBar';

export interface RankingProps {
  rankingList: {
    rank: number;
    name: string;
    amount: number;
  }[];
}

// const Top3RankingSection = ({ rankingList }: RankingProps) => (
//   <Top3RankingSectionWrapper>
//     <div className="rankers">
//       {rankingList.map(({ rank, name, amount }) => (
//         <RankingProfile rank={rank} name={name} amount={amount} key={rank} />
//       ))}
//     </div>
//   </Top3RankingSectionWrapper>
// );

// const OhtersRankingSection = ({ rankingList }: RankingProps) => (
//   <OthersRankingSectionWrapper>
//     {rankingList.map(({ rank, name, amount }) => (
//       <RankingBar rank={rank} nickname={name} amount={amount} key={rank} />
//     ))}
//   </OthersRankingSectionWrapper>
// );

const Ranking = () => {
  const rankingList = [
    { rank: 1, nickname: '오모마카세에대출', amount: 24 },
    { rank: 2, nickname: '지니지니', amount: 14 },
    { rank: 3, nickname: '오마카새우', amount: 8 },
    { rank: 4, nickname: '박일등', amount: 34 },
    { rank: 5, nickname: '지니', amount: 13 },
    { rank: 6, nickname: '박일등', amount: 3 },
    { rank: 7, nickname: '박일등', amount: 34 },
    { rank: 8, nickname: '지니', amount: 13 },
    { rank: 9, nickname: '박일등', amount: 3 },
    { rank: 10, nickname: '박일등', amount: 3 },
    { rank: 11, nickname: '박일등', amount: 3 },
    { rank: 12, nickname: '박일등', amount: 3 },
    { rank: 13, nickname: '박일등', amount: 3 },
    { rank: 14, nickname: '박일등', amount: 3 },
  ];
  const othersRankingList = rankingList.slice(3);
  //TODO: login한 userID로 myRanking값 바꾸기
  const myRanking = rankingList.slice(0, 1);

  return (
    <Layout title="명예의 전당 ✨">
      <OmakasePioneerSection>
        <OmakasePioneerWrapper />
      </OmakasePioneerSection>
      <RankingSection>
        <h1>전체랭킹</h1>
        <h2>랭킹은 매일 24시에 갱신됩니다.</h2>
        <Guidance />
      </RankingSection>

      <MyRangkingSection>
        {myRanking.map(({ rank, name, amount }) => (
          <RankingBar rank={rank} nickname={name} amount={amount} key={rank} />
        ))}
      </MyRangkingSection>
    </Layout>
  );
};

export default Ranking;

const OmakasePioneerSection = styled.section`
  padding: 0 20px;
`;

const OmakasePioneerWrapper = styled.div`
  width: 100%;
  height: 131.35px;
  background-color: #293ad2;
  border-radius: 16px;
`;

const RankingSection = styled(OmakasePioneerSection)`
  margin-top: 35px;
`;

const MyRangkingSection = styled.section`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: fit-content;
  padding: 17px 24px;
  left: 0px;
  bottom: 56px;
  background-color: white;
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
`;
