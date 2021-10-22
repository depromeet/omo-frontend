import styled from 'styled-components';

import Guidance from '@assets/guidance.svg';
import Layout from '@components/Layout';
import RankingBar from '@components/RankingBar';
import RankingCard from '@components/RankingCard';

export interface RankingProps {
  rankingList: {
    rank: number;
    name: string;
    amount: number;
  }[];
}

const Ranking = () => {
  const rankingList = [
    { rank: 1, nickname: '오모마카세에대출', amount: 24 },
    { rank: 2, nickname: '지니지니', amount: 14 },
    { rank: 3, nickname: '오마카새우', amount: 8 },
    { rank: 4, nickname: '오마카사위', amount: 3 },
    { rank: 5, nickname: '오마카사위', amount: 3 },
    { rank: 6, nickname: '오마카사위', amount: 3 },
    { rank: 7, nickname: '오마카사위', amount: 3 },
    { rank: 8, nickname: '오마카사위', amount: 3 },
    { rank: 9, nickname: '오마카사위', amount: 3 },
    { rank: 10, nickname: '오마카사위', amount: 3 },
  ];

  return (
    <Layout title="명예의 전당 ✨">
      <OmakasePioneerSection>
        <OmakasePioneerWrapper />
      </OmakasePioneerSection>
      <RankingSection>
        <h1>전체랭킹</h1>
        <h2>랭킹은 매일 24시에 갱신됩니다.</h2>
        <Guidance className="guidance" />
        {rankingList.map((props) => (
          <RankingCard props={props} key={props.rank} />
        ))}
      </RankingSection>

      <MyRangkingSection></MyRangkingSection>
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
  position: relative;

  h1 {
    ${({ theme }) => theme.fonts.subTitle1};
    line-height: 32px;
  }

  h2 {
    ${({ theme }) => theme.fonts.contents3};
    color: ${({ theme }) => theme.colors.black400};
    line-height: 17px;
    margin-bottom: 20px;
  }

  .guidance {
    position: absolute;
    top: 22px;
    right: 20px;
  }

  .ranking-card:not(:last-child) {
    margin-bottom: 10px;
  }
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
